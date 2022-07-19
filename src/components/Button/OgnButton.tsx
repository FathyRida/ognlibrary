import React from 'react'

export interface ButtonProps {
  label: string;
}

const OgnButton = (props: ButtonProps) => {
  return <button>{props.label}</button>;

};

export default OgnButton;