import React from 'react'
import Box from '../common/Box'

interface Props{
  employeeModal: () => void
}

export default function ListButtons(props: Props) {
  const { employeeModal } = props

  return (
    <Box height="50" marginb="10">
      <Box
        flex="true"
        align="center"
        justify="center"
        border="1px solid grey"
        border_radius="25"
        width="50"
        cursor_pointer="true"
        onClick={employeeModal}
      >
        <i className="fa-solid fa-user-plus"></i>
      </Box>
    </Box>
  )
}
