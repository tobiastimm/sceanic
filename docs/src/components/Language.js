import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import Icon from '@mdi/react'

const Element = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
  svg path {
    fill: ${props => (props.active ? '#65737f' : '#404754')};
  }
  &:hover svg path {
    fill: #65737f;
    transition: fill 0.2s ease-out;
  }
`

const Language = ({ onClick, path, active }) => {
  return (
    <Element onClick={onClick} active={active}>
      <Icon path={path} size={1.2} />
    </Element>
  )
}

export default Language
