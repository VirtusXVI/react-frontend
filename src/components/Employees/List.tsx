import { useState, useEffect } from "react";
import Box from "../common/Box";
import { Grid } from "../../assets/Grid";
import { Rows } from "../../assets/Rows";
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
        flex={"true"}
        height="50"
        align="center"
        justify="flex-end"
      >
        <Box
          height="30"
          width="40"
          marginr="10"
          border="1px solid black"
          border_radius="25px"
          flex="1"
          align="center"
          justify="space-around"
          cursor_pointer="true"
          onClick={() => setVisualization(!visualization)}
        >
          {visualization ? (
            <Box>
              <Rows />
            </Box>
          ) : (
            <Box>
              <Grid />
            </Box>
          )}
        </Box>
      </Box>
      {visualization == true ? (
        <Box>
          <Box
            height="40"
            border="1px solid black"
            paddingl="10"
            paddingr="10"
            flex="true"
            bg="lightgrey"
          >
            <Box flex="true" align="center">
              Full Name
            </Box>
            <Box flex="true" align="center">
              Job Title
            </Box>
          </Box>
        </Box>
      ) : null}
      {visualization
        ? users.map((user, key) => {
            return (
              <Box>
                <Box
                  key={key}
                  height="40"
                  border="1px solid black"
                  paddingl="10"
                  paddingr="10"
                  flex="true"
                >
                  <Box flex="true" align="center">
                    {user.firstName + " " + user.lastName}
                  </Box>
                  <Box flex="true" align="center">
                    {user.jobTitle}
                  </Box>
                </Box>
              </Box>
            );
          })
        : null}
    </Box>
  );
}
