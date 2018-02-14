import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

import CreatePost from './Post/CreatePost';
import ShowAllPost from './Post/ShowPost';

import Chat from './Chat/Chat';

export default class TimeLine extends React.Component{

    render(){
        return(
            <Grid style={{marginTop:"100px"}}>
           <Row>
               <Col xs={8}>
                <Row>
                    <CreatePost />
                    </Row>
                <Row>
                    <ShowAllPost />
                </Row>
               </Col>
               <Col xs={4}>
             <Chat />
               </Col>
               </Row>
                </Grid>
        )
    }
}