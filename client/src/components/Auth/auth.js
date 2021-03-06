import React, { Component } from "react";
import "./auth.css";


export default class authContent extends Component{
    state = {
        authType : this.props.type
    }
    render(){
        return(
            this.state.authType === "login" ? (
<div>
<div class = "col-md-1"></div>
<div class = "signincard">
<div class="card">

<div class="card-body">
<form>
    <div id="Login">Login</div>
    <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
    </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <div id="RememberMe">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
    </div>
  </div>

  <div id="LoginButton">
  <form action="/home">
  <button type="submit" class="btn btn-primary">Login</button> 
  </form>
  
  </div>
  <p></p>
<div id="forgotPassword">
  <a id="nav-link" href="/sign-up">Forgot your username or password?</a>
  </div>
  <p></p>
  <div id="SignUpText">
          Don't have an account? <a id="sign-up-link" href="/sign-up">Sign Up</a>
  </div>
                
  
</form>
</div>
</div>
</div>
</div>):(<h1>Sign In Form Goes Here</h1>)

        );
    }
}