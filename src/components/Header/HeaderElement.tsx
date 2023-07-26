import React from 'react'
import Box from '../common/Box'

interface Props{
  title: string
}

export default function HeaderElement(props:Props) {
  return (
    <Box flex={+true} align='center' justify='center'>{props.title}</Box>
  )
}
