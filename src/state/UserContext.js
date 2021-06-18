import React from "react";
import { fetchUsernameByGender } from "../api/user";

const defaultState = {
  userName: null,
  isLoading: false,
  isLoaded: false,
};

const UserContext = React.createContext({
  ...defaultState,
  changeUser: () => {},
});

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_USER": {
      return {
        userName: null,
        isLoading: true,
        isLoaded: false,
      };
    }
    case "SET_USER": {
      return {
        userName: action.payload,
        isLoading: false,
        isLoaded: true,
      };
    }
    case "CLEAR_USER": {
      return defaultState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const UserProvider = ({ children, initialFemale = false }) => {
  const [state, dispatch] = React.useReducer(userReducer, defaultState);
  const dispatchAction = React.useCallback(
    (type, payload) => {
      dispatch({ type, payload });
    },
    [dispatch],
  );
  const [isFemale, setIsFemale] = React.useState(initialFemale);
  const handleHeaderClick = () => setIsFemale(!isFemale);

  React.useEffect(() => {
    const fetchUserName = async () => {
      dispatchAction("LOADING_USER");
      const name = await fetchUsernameByGender(isFemale);
      dispatchAction("SET_USER", name);
    };
    setTimeout(() => {
      fetchUserName();
    }, 1000);
  }, [dispatchAction, isFemale]);

  return (
    <UserContext.Provider
      value={{
        ...state,
        changeUser: handleHeaderClick,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };
