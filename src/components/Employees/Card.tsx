import { styled } from "styled-components";
import Box from "../common/Box";

interface User {
  email: string;
  employeeNumber: number;
  extension: string;
  firstName: string;
  jobTitle: string;
  lastName: string;
  officeCode: string;
}

interface Props {
  user: User;
}

export default function Card(props: Props) {
  const { user } = props;
  return (
    <CustomCard>
      <Box height="20" margint="5" flex="true" justify="space-around">
        {user.firstName} {user.lastName}
      </Box>
      <Box height="20" margint="5" flex="true" justify="space-around">
        {user.jobTitle}
      </Box>
    </CustomCard>
  );
}

const CustomCard = styled.div`
  height: 200px;
  width: calc(97% / 5);
  border-radius: 25px;
  border: 1px solid grey;
`;
