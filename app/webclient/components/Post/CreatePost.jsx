
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style={
    paperStyle:{
    width: "auto",
    height: "200px",
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    border: "solid 1px #d5d5d5",
    overflowY:"auto"
    }
  }

export default class CreatePost extends React.Component{

    render(){

        return(
            <div style={style.paperStyle}>
               <Card>
    <CardHeader
      title="Navjeet Kumar"
      subtitle="My Post"
      avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAOMAAAAJDU5YjQzMzdjLWQ0NGYtNDdkNi1hYzA3LWQ4YTQ5YzEzOTA5MQ.jpg"
    />   
    
    <CardText>
    <TextField
      hintText="Share something like 50 Paisa"
      floatingLabelText="Wts on your mind Funky?"
      multiLine={true}
      rows={2}
    />
    
    
    <FloatingActionButton className="pull-right" style={{marginRight:"200px"}} touch={true} tooltip="Post"
    tooltipPosition="bottom-left">
      <ContentAdd />
    </FloatingActionButton>
    </CardText>
  </Card>
                </div>
        )
    }
}