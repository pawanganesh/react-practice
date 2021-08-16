import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  // const users = [{ name: "Pawanlal Ganesh", age: 21 }];
  const [usersList, setUsersList] = useState([
    { id: 1, name: "Pawanlal Ganesh", age: 21 },
  ]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUser) => {
      console.log(Math.random().toString());
      return [
        ...prevUser,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
