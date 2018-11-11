import React, { Component } from 'react';
import {Panel, ListGroup, ListGroupItem,Button} from 'react-bootstrap'





let inputStyle1 = {
  float:'right',
  margin: '0px 5px 0px 10px'

};
let inputStyle2 = {
  float:'right',
    padding: "3px",
    border: '1px solid black',
    display: 'inline-block',


};

class Invoice extends Component {
  render() {
    return (
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          color: 'rgba(0, 0, 0, 0.65)',
          height: '100%',
        }}
      >
        <br />
        <br />
        <div
          style={{
            background: 'rgba(255, 255, 255, 1)',
            margin:  '0% 20%'
          }}
        >
          <br />
          <br />
          <div
            style={{
              margin:  '0% 20%'
            }}
          >
            <br />
            <h1
              style={{
                color: 'rgba(0, 0, 0, 0.65)',
              }}
            >
              Invoice
            </h1>
  <div>
  <Panel>
    <Panel.Heading componentClass="h3">Verified</Panel.Heading>
    <Panel.Body>
  <ListGroup>
  <ListGroupItem>Item 1  
     <Button bsStyle="success" bsSize="small" style={inputStyle1}>Default</Button>
     <span style={inputStyle2}>900</span>
  </ListGroupItem>
  <ListGroupItem>Item 2  
     <Button bsStyle="success" bsSize="small" style={inputStyle1}>Default</Button>
     <span style={inputStyle2}>900</span>
  </ListGroupItem>
  <ListGroupItem>Item 3  
     <Button bsStyle="success" bsSize="small" style={inputStyle1}>Default</Button>
     <span style={inputStyle2}>900</span>
  </ListGroupItem>
</ListGroup>
</Panel.Body>
    
  </Panel>
  <Panel>
    <Panel.Heading componentClass="h3">Unverified
    </Panel.Heading>
    <Panel.Body>  <ListGroup>
  <ListGroupItem>Item 1  
     <Button bsStyle="success" bsSize="small" style={inputStyle1}>Default</Button>
     <span style={inputStyle2}>900</span>
  </ListGroupItem>
  <ListGroupItem>Item 2  
     <Button bsStyle="success" bsSize="small" style={inputStyle1}>Default</Button>
     <span style={inputStyle2}>900</span>
  </ListGroupItem>
  <ListGroupItem>Item 3  
     <Button bsStyle="success" bsSize="small" style={inputStyle1}>Default</Button>
     <span style={inputStyle2}>900</span>
  </ListGroupItem>
</ListGroup>
</Panel.Body>
  </Panel>
</div>


          <br />
          </div>
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default (Invoice);
