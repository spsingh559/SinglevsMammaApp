import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

export default class Home extends React.Component {
  
  render() {
  
      return (
        <Grid style={{marginTop:"90px"}}>  
        
            
         
			{/* <Row >
			<Col xs={2}><TradePortalComponent />
      </Col>
      <Col xs={7}><TradeStatusAndRecap />
      </Col>
      <Col xs={3}><Notification />
      </Col>
			</Row>
      <Row>
        <Col xs={6}> <ParcelStatusComponent />
        </Col>
        <Col xs={6}> <TradeSummaryPublished />
        </Col>
        </Row>        
           */}
           <center>
          <Carousel style={{width:"672px"}}>
  <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/gins1.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/gins2.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/gins3.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img width={672} height={500} alt="900x500" src="../images/gins4.jpg" />
    
  </Carousel.Item>
</Carousel>
         </center>
          </Grid>
      )
    }
  }



