import { useState, useEffect } from "react";
import Box from "../common/Box";
import Row from "./Row";
import Card from "./Card";
import HeadingRow from "./HeadingRow";
import CreateEmployee from "./CreateEmployee";
import { Grid, Rows } from "../../assets/VisualizationIcons";
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
        <Box
          margint="10"
          marginb="10"
          flex={"true"}
          height="50"
          align="center"
          justify="flex-end"
        >
          <Box
            height="40"
            width="40"
            marginr="10"
            border="1px solid grey"
            border_radius="25"
            flex="1"
            align="center"
            justify="space-around"
            cursor_pointer="true"
            onClick={() => setVisualization(!visualization)}
          >
            {visualization ? (
              <Box height="20" width="20">
                <Rows />
              </Box>
            ) : (
              <Box height="20" width="20">
                <Grid />
              </Box>
            )}
          </Box>
        </Box>
        <Box height="50" marginb="10">
          <Box
            flex="true"
            align="center"
            justify="center"
            border="1px solid grey"
            border_radius="25"
            width="50"
            cursor_pointer="true"
            onClick={createEmployee}
          >
            <i className="fa-solid fa-user-plus"></i>
          </Box>
        </Box>
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
