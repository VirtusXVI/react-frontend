import List from './List'
import Header from './Header';
import Box from './common/Box';

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
  users: User[]
}

export default function Home(props: Props) {
  const { users } = props
  return (
    <div>
      <Box flex={+true} height={'60'}>
        <h1>ciao</h1>
      </Box>
      <Header />
      <List users={users} />
    </div>
  )
}
