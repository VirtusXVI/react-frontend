import styled from 'styled-components'

interface Props {
  flex?: number
  width?: string
  height?: string
  children: object
}

export default function Box(props: Props) {
  return (
    <CustomBox {...props}>
      {props.children}
    </CustomBox>
  )
}

const CustomBox = styled.div<Props>`
  height: ${props => props.height ? props.height + 'px' : '100%' };
  width: ${props => props.width ? props.width + 'px' : '100%' };
  display: ${ props => props.flex ? 'flex' : 'block' };
`