import { useState, useEffect } from "react";
import Box from "../common/Box";
import { Grid } from '../../assets/Grid'
import { Rows } from '../../assets/Rows'
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
  let [visualization, setVisualization] = useState<boolean>(true)

  useEffect(() => {
    axios.get<User[]>("http://158.180.238.74:8089/request").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Box margint="30">
      <Box flex={'true'} height="50" align="center" justify="flex-end">
        <Box
          height="40"
          width="80"
          marginr="10"
          border="1px solid black"
          border_radius="25px"
          flex="1"
          align="center"
          justify="space-around"
          cursor_pointer="true"
          onClick={() => setVisualization(!visualization)}
        >
          {
            visualization ? (
              <Box>
                <Rows />
              </Box>
            ) :
            (
              <Box>
                <Grid />
              </Box>
            )
          }
        </Box>
      </Box>
      {
        visualization ? 
        (
          users.map((user, key) => {
            return <Box key={key}>{user.firstName}</Box>;
          })
        ) :
        (
          null
        )
      }
    </Box>
  );
}
