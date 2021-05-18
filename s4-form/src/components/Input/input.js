import React from "react";

function Input(props) {
console.log(props)
  return (
      <input type={props.type}/>
  )
}

export default Input;