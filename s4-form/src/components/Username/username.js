import React from "react";
import Input from "../Input/input";

function Username(props) {

  return (
    <div>
      <label>Username
        <Input type="email" value={props.text} onChange={props.handleChangeText}/>
      </label>
    </div>
    
  )
}

export default Username;