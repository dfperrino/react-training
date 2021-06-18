import React from "react";
import { fetchUsernameByGender } from "../api/user";

const defaultState = {
  userName: null,
  isLoading: false,
  isLoaded: false,
  changeUser: () => {},
};

const UserContext = React.createContext(defaultState);

const UserProvider = ({ children, initialFemale = false }) => {
  const [userName, setUserName] = React.useState(defaultState.userName);
  const [isLoading, setIsLoading] = React.useState(defaultState.isLoading);
  const [isLoaded, setIsLoaded] = React.useState(defaultState.isLoaded);
  const [isFemale, setIsFemale] = React.useState(initialFemale);
  const handleHeaderClick = () => setIsFemale(!isFemale);

  React.useEffect(() => {
    const fetchUserName = async () => {
      setIsLoading(true);
      setIsLoaded(false);
      const name = await fetchUsernameByGender(isFemale);
      setUserName(name);
      setIsLoading(false);
      setIsLoaded(true);
    };
    setTimeout(() => {
      fetchUserName();
    }, 1000);
  }, [isFemale]);

  return (
    <UserContext.Provider
      value={{
        userName,
        changeUser: handleHeaderClick,
        isLoading,
        isLoaded,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };
