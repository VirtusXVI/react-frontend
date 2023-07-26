import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";

function App() {
  interface User {
    email: string;
    employeeNumber: number;
    extension: string;
    firstName: string;
    jobTitle: string;
    lastName: string;
    officeCode: string;
  }

  let [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://158.180.238.74:8089/request").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <Home users={users} />
    </>
  );
}

export default App;
