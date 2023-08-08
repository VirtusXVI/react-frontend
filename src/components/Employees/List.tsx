import { useState, useEffect } from "react";
import Box from "../common/Box";
import Row from "./Row";
import Card from "./Card";
import HeadingRow from "./HeadingRow";
import CreateEmployee from "./CreateEmployee";
import VisualizationButton from "./VisualizationButton";
import ListButtons from "./ListButtons";
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

export default function List() {
  let [users, setUsers] = useState<User[]>([]);
  let [visualization, setVisualization] = useState<boolean>(true);
  let [isCreating, setIsCreating] = useState<boolean>(false);
  // let [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    axios.get<User[]>("http://158.180.238.74:8089/request").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const createEmployee = () => {
    setIsCreating(!isCreating);
  };

  return (
    <Box>
      <Box paddingl="10" paddingr="10">
        <VisualizationButton visualization={visualization} setVisualization={setVisualization}/>
        <ListButtons createEmployee={createEmployee} />
        {visualization == true ? <HeadingRow /> : null}
        {visualization ? (
          users.map((user, key) => {
            return <Row user={user} key={key} />;
          })
        ) : (
          <Box flex="true" flexwrap="true" gap="10">
            {users.map((user, key) => {
              return <Card user={user} key={key} />;
            })}
          </Box>
        )}
      </Box>
      {isCreating ? <CreateEmployee createEmployee={createEmployee} /> : null}
    </Box>
  );
}
