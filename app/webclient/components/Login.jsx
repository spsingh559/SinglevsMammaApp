import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Grid} from 'react-bootstrap';

const userInfo=[
    {
    username: "Jit",
    password: "123456",
    roleType: 'A' 
  },
  {
    username: "Operator",
    password: "123456",
    roleType: 'B'
  }
]


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      userContactSignUp:'',
      userEmailSignUp:'',
      userPwdSignUp:'',
      signUpStatus:false
    }
    this.handleUsername=this.handleUsername.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleUsername(e){
    this.setState({ username: e.target.value });
  }
  handlePassword(e){
    this.setState({ password: e.target.value });
  }

  handleUserEmailignUp=(e)=>{
    this.setState({userEmailSignUp:e.target.value});
  }

  handlePasswordSignUp=(e)=>{
    this.setState({userPwdSignUp:e.target.value});
  }
  handleUserConatctSignUp=(e)=>{
    this.setState({userContactSignUp:e.target.value});
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }
  handleClick(e) {
    this.context.router.push('/');
    // let data={userName:this.state.Id,userPassword:this.state.password};
    // Axios({
    //   method:'post',
    //   url:'/api/v1/user/',
    //   data:data
    // })
    // .then((data1) => {
    //   console.log('Login details connected to server for post');
    //   console.log(data1.data.message);
    //   if(data1.data.message=='success'){
    //     this.context.router.push('/dashboard');
    //     alert('Successfully logged in!!!');
    //   }else{
    //     alert('Please enter valid Credentials!!!');
    //   }
// console.log(data1);
// })
//     .catch((error) => {
//       console.log(error);
//       console.log(error+"error in Login data for post");
//     });
  }

  signUp=()=>{
    this.setState({signUpStatus:true});
  }

  handleSignUpClick=()=>{
    let signUpObj={
      _id:Date.now(),
      userEmailSignUp:this.state.userEmailSignUp,
      userPwdSignUp:this.state.userPwdSignUp,
      userContactSignUp:this.state.userContactSignUp
    }
    // Axios({
    //   method:'post',
    //   url:'/api/v1/user/signUp',
    //   data:signUpObj
    // })
    // .then((data1) => {
    //   console.log('Login details connected to server for post');
    //   console.log(data1.data.message);
    //   alert('Signup Successfully');
    //   this.setState({signUpStatus:false});
    // })
    // .catch((error) => {
    //   console.log(error);
    //   console.log(error+"error in Login data for post");
    // });

  }

  loginClick=()=>{
    this.context.router.push('/');
    // userInfo.forEach((data)=>{
    //   if(data.username==this.state.username && data.password==this.state.password){
    //     alert('Successfully Login');
    //     sessionStorage.setItem('userLoginDetails',JSON.stringify(data));
    //     if(data.roleType=="A"){
    //     this.context.router.push('/');
    //     }else if(data.roleType=="B"){
    //       this.context.router.push('/parcelHome');
    //     }
    //   }
    // })
    // // sessionStorage.setItem('userLoginDetails',JSON.stringify(userLoginDetails));
    //  let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    // console.log(retrievedUserDetails);
  }
  render() {
    /*console.log("----Session ID Login----");
    sessionStorage.setItem("userId", "A100");
    sessionStorage.setItem("emailId", "jitendra.chauhan2@wipro.com");
    let id =sessionStorage.getItem("userId");
    let emailid =sessionStorage.getItem("emailId");
    console.log(id);
    console.log(emailid);*/
    
      return (

        <div className="background">
        <center>
        <Paper style={{height:'300px',width:'500px',marginTop:'200px'}} zDepth={5} >
        {/* <pap style={{height:'300px',width:'500px',backgroundColor:'white',marginTop:'200px'}}> */}


        <h2 style={{marginTop: '10px'}}>
        Single vs Mammas Login
        </h2><br/>
        <TextField
      hintText="User Name"
      floatingLabelText="Enter User Name"
      onChange = {(event,newValue) => this.setState({username:newValue})}
    /><br />
    <TextField
      hintText=" Password"
      onChange = {(event,newValue) => this.setState({password:newValue})}
      floatingLabelText="Enter Password"
    /><br />
        <div style={{marginTop:"50px"}}>
        <RaisedButton label="Login" primary={true}  onTouchTap={this.loginClick}/>
        </div>
        </Paper>
        </center>
        </div>
        )
    }
  }