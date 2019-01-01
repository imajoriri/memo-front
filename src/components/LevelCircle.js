import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';

var pStyle = {
  width: "20px",
  height: "20px",
  backgroundColor: "black",
  borderRadius: "50%",
  margin: "auto",
  marginTop: "15px",
}

var colStyle = {
  padding: "0",
}

class LevelCircle extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Row>
          <Col xs={4} style={colStyle}>
            <p style={pStyle}></p>
          </Col>
          <Col xs={4} style={colStyle}>
            <p style={pStyle}></p>
          </Col>
          <Col xs={4} style={colStyle}>
            <p style={pStyle}></p>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}
const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelCircle);
