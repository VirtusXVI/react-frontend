import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  email: string;
  employeeNumber: number;
  extension: string;
  firstName: string;
  jobTitle: string;
  lastName: string;
  officeCode: string;
}

export default function Home() {

  let [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://158.180.238.74:8089/request").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      { users.map((user, key) => {
        return <div key={key}>{ user.firstName }</div>
      }) }
    </div>
  )
}
