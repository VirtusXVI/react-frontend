import React from 'react'
import Box from '../common/Box'

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

export default function Row(props: Props) {
  const { user } = props
  return (
    <Box>
      <Box
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
  )
}
