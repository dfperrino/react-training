import React from "react";
import { fetchUsernameByGender } from "../api/user";

const UserContext = React.createContext({
  userName: null,
  changeUser: () => {},
});

const UserProvider = ({ children, initialFemale = false }) => {
  const [userName, setUserName] = React.useState("pepito");
  const [isFemale, setIsFemale] = React.useState(initialFemale);
  const handleHeaderClick = () => setIsFemale(!isFemale);

  React.useEffect(() => {
    const fetchUserName = async () => {
      const name = await fetchUsernameByGender(isFemale);
      setUserName(name);
    };
    fetchUserName();
  }, [isFemale]);

  return (
    <UserContext.Provider
      value={{
        userName,
        changeUser: handleHeaderClick,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };
