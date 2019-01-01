import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';

var buttonStyle = (key) => {
  var result = {
    border: "black solid 1px",
    backgroundColor: "white",
    width: "100%",
    height: "40px",
  }
  if(key !== 3){
    result.borderRight = "none"
  }
  return result;
}

var colStyle = {
  padding: 0
}

class LevelSelectButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Row>
          <Col xs="4" style={colStyle}>
            <button style={buttonStyle(1)}>1</button>
          </Col>
          <Col xs="4" style={colStyle}>
            <button style={buttonStyle(2)}>2</button>
          </Col>
          <Col xs="4" style={colStyle}>
            <button style={buttonStyle(3)}>3</button>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelectButton);
