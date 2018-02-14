import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import Keyboardbackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
import Send from 'material-ui/svg-icons/content/send';
import {Row} from 'react-bootstrap';
import TextField from 'material-ui/TextField';

{/* <i class="material-icons">keyboard-backspace</i> */}

import MessageComponent from './MessageComponent.jsx';
import ShowMessage from './ShowMessage';

const style={
    paperStyle:{
    width: "auto",
    height: "800px",
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    border: "solid 1px #d5d5d5",
    overflowY:"auto"
    },
    paperStyle2:{
      width: "auto",
      height: "500px",
      borderRadius: "6px",
      backgroundColor: "#ffffff",
      border: "solid 1px #d5d5d5",
      overflowY:"auto"
      },
   
        headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400,
          },
          messageBox:{
            width: "320",
            marginLeft:"20px",
            marginTop:"10px",
    height: "350px",
    
    backgroundColor: "#ffffff",
    
    overflowY:"auto"
          },
          messageBoxFooter:{
            marginTop:"10px",
            width: "300px",
            marginLeft:"20px",
            height: "50px",
            borderRadius:"20px",
            backgroundColor: "#ffffff",
            border: "solid 1px #d5d5d5"
          }
    
  }

  const chatUserData=[{
    _id:"1",
    userId:"Navjeet",
    imgUrl:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAOMAAAAJDU5YjQzMzdjLWQ0NGYtNDdkNi1hYzA3LWQ4YTQ5YzEzOTA5MQ.jpg",
    status:"Jindgi Itni Assan n Hai",
    recentMessage:"Gins has sent New Message for You!!"

  },{
    _id:"2",
    userId:"Pranjul",
    imgUrl:"https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAfGAAAAJDNhYTZjYTY5LTBhOGUtNDUzYS1iMjBhLTk3Nzk3YjVkODkwYQ.jpg",
    status:"If Life is Lemon, Squeez It",
    recentMessage:" One Message from Someone!!"

  },{
    _id:"3",
    userId:"Gins",
    imgUrl:"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-1/c25.0.100.100/p100x100/13700171_1054027358018701_4686459465728184803_n.jpg?oh=a12a9388dd4453f7b192de25433c775b&oe=5B12F8ED",
    status:"A Bai Tum Kya Kar rahe ho??",
    recentMessage:"One Message from ready to Mingle!!"

  },{
    _id:"4",
    userId:"shyam",
    imgUrl:"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-1/c27.0.160.160/p160x160/27066953_1497553197033986_2819931860275330955_n.jpg?oh=31daa0f6e6059ece7f4626381b9c3153&oe=5B09D9F3",
    status:"Think and Update",
    recentMessage:"Fill in the blanks"

  },{
    _id:"5",
    userId:"Mammas",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQDRjCxHUIrllfk6bpwnLD4dw5-DSw6s4gVwIMa9Fg-ATbP1X",
    status:"Single vs Mammas",
    recentMessage:"Waiting for 1st Message"
  }];






export default class Chat extends React.Component{

  state={
    windowStatus:false,
    particularUserData:{},
    message:'',
    messageData:[]
  }

  messageWindowStatus=(data)=>{
    
this.setState({windowStatus:true,particularUserData:data});
  }

  showUserScreen=()=>{
    this.setState({windowStatus:false});
  }

  sendMessage=()=>{
    let obj={
      message:this.state.message
    }
    let newmessage=this.state.messageData.concat([obj]);
    this.setState({messageData:newmessage,message:''});
  }

  handleMessage=(e)=>{
    this.setState({message:e.target.value});
  }

    render(){
      console.log('chatUserData');
      console.log(chatUserData);
      if(this.state.windowStatus==false){

        return(
            <div style={style.paperStyle}>
            
                <Tabs >
    <Tab label="Chats" style={{backgroundColor:"#075e54",color:'white'}}>
      <div>
        <MessageComponent chatUserData={chatUserData} messageWindowStatus={this.messageWindowStatus}/>
      </div>
    </Tab>
    <Tab label="Status" style={{backgroundColor:"#075e54",color:'white'}}>
      <div>
        <h2 style={style.headline}>Status</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Calls" style={{backgroundColor:"#075e54",color:'white'}}>
      <div>
        <h2 style={style.headline}>Calls</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
                </div>
        )}else{

          return(
            <div style={style.paperStyle2}>
            <List style={{backgroundColor:"#075e54",color:'white'}}>
        <ListItem
        style={{color:"white"}}
          leftAvatar={ <Keyboardbackspace color="white" onTouchTap={this.showUserScreen}/>}
          primaryText={this.state.particularUserData.userId}
          rightIcon={<Avatar src={this.state.particularUserData.imgUrl} />}
        />
        </List>
        <Row style={style.messageBox}>
            <ShowMessage messageData={this.state.messageData} />
          </Row>
          <Row style={style.messageBoxFooter}>
          <center>
          <TextField
      hintText="Message It"
      onChange={this.handleMessage}
      value={this.state.message}
    />
    <Send  onTouchTap={this.sendMessage}/>
    </center>

            </Row>

        </div>
        

          )
        }
    }
}