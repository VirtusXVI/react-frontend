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
      { users.map((user, key) => {
        return <div key={key}>{ user.firstName }</div>
      }) }
    </div>
  )
}
