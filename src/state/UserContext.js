import React from "react";
import { fetchUsernameByGender } from "../api/user";

const UserContext = React.createContext({
  userName: null,
});

const UserProvider = ({ children, isFemale = false }) => {
  const [userName, setUserName] = React.useState("pepito");

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };
