import React from 'react';

const style={
    paperStyle:{
    width: "auto",
    height: "1000px",
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    border: "solid 1px #d5d5d5",
    overflowY:"auto",
    marginTop:"20px"
    }
  }

export default class ShowPost extends React.Component{

    render(){

        return(
            <div style={style.paperStyle}>
                ShowPost
                </div>
        )
    }
}