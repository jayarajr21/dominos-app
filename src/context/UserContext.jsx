import React, { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    userId: 0,
    userName: "",
    isLoggedIn:true, 
  });
  const [dominos, setDominos] = useState([]);

  const searchContact = (userName) => {
    return dominos.reduce((acc, curr) => {
      if (curr.name === userName) {
        acc = curr;
      }
      return acc;
    }, {});
  };

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        searchContact,
        setDominos,
        dominos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };