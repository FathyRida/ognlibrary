import React from 'react'
import styled from 'styled-components'
import './style.css' 



const Button = styled.button`
 text-decoration: none;
 background-color: hsla(189, 85%, 28%, 1);
 box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125),
  0 1px 1px rgba(0, 0, 0, 0.05);
 border-bottom-width: 0.5rem;

 &:hover {
  background-color: hsla(189, 85%, 32%, 1);
 }

 &:active {
  border-bottom-width: 0.1rem;
  border-top-width: 0.5rem;
 }
`

export interface ButtonProps {
  label: string;
}

const OgnButton = (props: ButtonProps) => {
  return <Button>{props.label}</Button>;

};

export default OgnButton;