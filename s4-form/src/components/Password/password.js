import React from "react";
import Input from "../Input/input";

function Password(props) {

  return (
    <div>
      <label>Password
        <Input type="password" value={props.text} onChange={props.handleChangeText}/>
      </label>
    </div>
    
  )
}

export default Password;