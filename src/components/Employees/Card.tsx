import { styled } from 'styled-components'

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
  user: User
}

export default function Card(props: Props) {
  const { user } = props
  return (
      <CustomCard>

      </CustomCard>
  )
}

const CustomCard = styled.div`
    height: 200px;
    width: calc(97% / 5);
    border-radius: 25px;
    border: 1px solid grey;
`