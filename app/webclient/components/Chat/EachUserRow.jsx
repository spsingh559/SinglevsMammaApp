import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

export default class EachUserRow extends React.Component{

    // state={
    //     messageWindowStatus:false
    // }

    openChatWindow=()=>{
        this.props.messageWindowStatus(this.props.data);
    }

    render(){
        console.log(this.props.data);


        return(           
            <ListItem
            leftAvatar={<Avatar src={this.props.data.imgUrl} />}
            primaryText={this.props.data.status}
            secondaryText={
              <p>
               {this.props.data.recentMessage}
              </p>
            }
            secondaryTextLines={1}
            onTouchTap={this.openChatWindow}
          />
          
  
        )
    }
}