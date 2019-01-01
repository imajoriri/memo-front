import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

var buttonStyle = {
  border: "black solid 1px",
  backgroundColor: "white",
  width: "100%",
  height: "40px",
}

class SendButton extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button style={buttonStyle} >send</button>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendButton);
