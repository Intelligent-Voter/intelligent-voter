import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
         email: '',
         password: ''
        };

      this.onPass = this.onPass.bind(this);
      this.onLogin = this.onLogin.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
}

onPass(e) {
    this.setState({
      password: e.target.value
    });
  }

onLogin(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onSubmit(e){
    e.preventDefault();
    const login = {
     
      //   fetch('http://localhost:3000/login', {  
      //   method: 'POST',  
      //   headers: {  
      //    // 
      //   },  
      //   body: JSON.stringify({
      //   email: this.state.email,
      //   password: this.state.password,
      
      // }).then(res => console.log(res);
      //   if (res.data.status) === 200 {
      //     ///use hooks to go to next page
      //   }
      //   else if(response.data.code == 204){
      //   console.log("Username password don't match");
      //   alert("username/password do not match")
      //   }
      //   else{
      //   console.log("Username does not exists");
      //   alert("Username does not exist");
      //   }
      //   )
      //   .catch((error) =>  console.log(error));
      //   });

        // this.setState(
        //     {
        //         email: '',
        //         password: ''
        //     }
        // )
    }
  }


render () {
  return (
    <div>
    <h3> Login Form:</h3>
    <form onSubmit={this.onSubmit}>
      <div className='form-label'>
        <label>Email:</label>
        <input type='text'
          required
          className='form'
          name='email'
          value={this.state.email}
          onChange={this.onLogin} />
      </div>
      <div className='form-label'>
        <label>Password:</label>
        <input type='password'
          required
          className='form'
          name='password'
          value={this.state.password}
          onChange={this.onPass} />
      </div>
      <div className='form-label'>
            <input type='submit' value='Login' className='button' />
          </div>
        </form>
    </div>
    )
 }

}

export default Login;