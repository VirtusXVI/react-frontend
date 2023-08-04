import React from 'react'
import Box from '../common/Box'

export default function HeadingRow() {
  return (
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
  )
}
