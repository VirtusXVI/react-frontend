import { useState, useEffect } from "react";
import Box from "../common/Box";
import Row from "./Row";
import Card from "./Card";
import HeadingRow from "./HeadingRow";
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

export default function Home() {
  let [users, setUsers] = useState<User[]>([]);
  let [visualization, setVisualization] = useState<boolean>(true);

  useEffect(() => {
    axios.get<User[]>("http://158.180.238.74:8089/request").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Box paddingl="10" paddingr="10" marginb="20">
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
          border_radius="25px"
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
  );
}
