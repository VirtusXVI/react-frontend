import styled from 'styled-components'

interface Props {
  flex?: string
  align?: string
  justify?: string
  width?: string
  height?: string
  border?: string
  bordert?: string
  borderb?: string
  borderl?: string
  borderr?: string
  border_radius?: string
  margin?: string
  margint?: string
  marginb?: string
  marginl?: string
  marginr?: string
  padding?: string
  cursor_pointer?: string
  onClick?: Function
  children?: React.ReactNode
}

export default function Box(props: Props) {
  const { onClick } = props
  return (
    <CustomBox {...props} onClick={onClick}>
      {props.children}
    </CustomBox>
  )
}

const CustomBox = styled.div<Props>`
  height: ${props => props.height ? props.height + 'px' : '100%' };
  width: ${props => props.width ? props.width + 'px' : '100%' };
  margin: ${props => props.margin ? props.margin + 'px' : 0 };
  margin-top: ${props => props.margint ? props.margint + 'px' : 0 };
  margin-left: ${props => props.marginl ? props.marginl + 'px' : 0 };
  margin-right: ${props => props.marginr ? props.marginr + 'px' : 0 };
  margin-bottom: ${props => props.marginb ? props.marginb + 'px' : 0 };
  padding: ${props => props.padding ? props.padding + 'px' : 0 };
  display: ${ props => props.flex ? 'flex' : 'block' };
  cursor: ${ props => props.cursor_pointer ? 'pointer' : 0 };
  align-items: ${ props => props.align};
  justify-content: ${ props => props.justify};
  border: ${ props => props.border};
  border-top: ${ props => props.bordert ? props.bordert : '' };
  border-bottom: ${ props => props.borderb ? props.borderb : '' };
  border-left: ${ props => props.borderl ? props.borderl : '' };
  border-right: ${ props => props.borderr ? props.borderr : '' };
  border-radius: ${ props => props.border_radius};
`