import React, { Component } from 'react';
import logo from '../../assets/images/slogo.png';
import totallogo from '../../assets/images/totallogo.png';
import PropTypes from 'prop-types';
import axios from 'axios'

// import { userService } from '../../_services';



class Login extends Component {

    constructor (props){
        super(props);
        this.state = {
            type: 'password',
            credentials:{
                email:'',
                password:''
            }          
        }; 
          // this.handleChange = this.handleChange.bind(this);        
     }
     showtextHandler = () => {   
        
        const inputType = this.state.type;

        if(inputType === 'text'){
            this.setState({type : 'password'});
        } else {
            this.setState({type : 'text'});
        }
               
     }
    handleChange = (event) =>{
    this.setState({credentials:{email: event.target.value}});
    this.setState({credentials:{password: event.target.value}});
    debugger;
  }

     loginDetials = (event) => {   
       event.preventDefault();
            axios.post('http://localhost:82/Invoice-App/public/api/user/login', (this.state.credentials),
                 headers: { 
      "Content-Type": "application/x-www-form-urlencoded",
    })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
     }

     
    render() {
        return (
            <div className="container-fluid">

                <div className="columns login-block">
                    <div className="column is-6 login-leftbar">
                        <div className="has-text-centered leftbar-content">
                            <div className="image-logo has-text-centered">
                              <img src={logo} alt="logo"></img>
                            </div>
                            <h6>Welcome to</h6>
                            <h3>TOTAL</h3>
                        </div>
                    </div>
                    <div className="column is-6  is-paddingless login-rightbar">
                    <div className="column is-6 is-offset-one-quarter">
                        <div className="image-logo">
                            <img src={totallogo} alt="logo"></img>
                        </div>
                        <h4>Welcome Back,</h4>

                        <h6>Sign in to continue</h6>
                        <form className="login-form" onSubmit={this.loginDetials}> 
                            <div className="field">
                                <label className="label" htmlFor ="email">Email</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input input_style" value = {this.state.credentials.email} onChange={e => this.setState({ username: e.target.value })} name="email" type="email" required />

                                </div>                                
                            </div>
                            <div className="field">
                                <label className="label" htmlFor ="password">Password</label>
                                <p className="control has-icons-left">
                                    <input className="input input_style" name="password" value = {this.state.credentials.password}  onChange={e => this.setState({ password: e.target.value })} type={this.state.type} required />
                                    <a className="icon is-small is-right" style={{
                                        zIndex: '9',
                                        pointerEvents: 'auto'
                                    }} onClick={this.showtextHandler}>
                                       { this.state.type === 'password' ? <i className="far fa-eye" style={{color: '#363636'}}></i> : <i className="far fa-eye-slash" style={{color: '#363636'}}></i>}
                                    </a>
                                </p>
                            </div>
                            <div className="has-text-right forgot-pwd">
                              <a>Forgot Password?</a>
                            </div>
                            <button  type="submit" className="button is-primary login-btn">Log in</button>

                        </form>  
                        <div className="has-text-centered login-signup">
                              <span>New user?</span><a>Sign up</a>
                        </div>   
                    </div>
                    </div>
                </div>
                <footer className="">
  <div className="content has-text-centered">
    <p>
      @copy rights by ------
     </p>
  </div>
</footer>

            </div>

        );
    }
}



export default Login;