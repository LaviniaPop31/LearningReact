import React from 'react';
import Button from '../components/Button/button';
import Password from '../components/Password/password';
import Username from '../components/Username/username';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleSubmit = (event)=> {
    console.log('Username' +  this.state.email)
    event.preventDefault();
  }

  handleChangeUsername = (event) => {
    this.setState({email: event.target.email})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.password})
  }


  render() {
    return(
        <form onSubmit={this.handleSubmit}>
            <Username text={this.state.email} handleChangeText={this.handleChangeUsername}/>
            <Password text={this.state.password} handleChangeText={this.handleChangePassword}/>
            <Button/>
        </form>
    )
  }
}

export default Form;