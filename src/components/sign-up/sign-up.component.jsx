import React, { Component } from 'react';
import "./sign-up.styles.scss"
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  state = {
    displayName : "",
    email : "",
    password: "",
    confirmPassword: ""
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword){
      alert("Passwords don't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email ,password);
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName : "",
        email : "",
        password: "",
        confirmPassword: ""
      })
    } catch (error) {
      console.log("error signing up " , error.message)
    }
  }

  handleChange = (event) => {
    const {value, name} = event.target; 
    this.setState({[name] : value})
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange} 
            name="displayName" 
            type="text" 
            value={this.state.displayName} 
            label = "Display Name"
            required
          />
          <FormInput 
            handleChange={this.handleChange} 
            name="email" 
            type="email" 
            value={this.state.email} 
            label = "Email"
            required
          />
          <FormInput 
            handleChange={this.handleChange}  
            name="password" 
            type="password" 
            value={this.state.password} 
            label = "Password"
            required
          />
          <FormInput 
            handleChange={this.handleChange}  
            name="confirmPassword" 
            type="password" 
            value={this.state.confirmPassword} 
            label = "Confirm Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp ;
