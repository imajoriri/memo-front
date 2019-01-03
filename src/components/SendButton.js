import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import registerMemo from "./../actions/registerMemo";

var buttonStyle = {
  border: "white solid 1px",
    borderRadius: "20% / 50%",
  backgroundColor: "#00DC94",
  width: "100%",
  height: "40px",
}

class SendButton extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button style={buttonStyle} onClick={e => this.props.sendMemo(e)}>send</button>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMemo: (e) => dispatch(registerMemo.sendMemo(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendButton);
