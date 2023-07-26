import styled from 'styled-components'

interface Props {
  flex?: number
  align?: string
  justify?: string
  width?: string
  height?: string
  border?: string
  children?: object
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
  align-items: ${ props => props.align};
  justify-content: ${ props => props.justify};
  border-bottom: ${ props => props.border};
`