import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

const divStyle = {
  backgroundColor: "#00DC94",
  width: "100%",
  height: "60px",
  position: "fixed",
  bottom: "0px",
}

class Footer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={divStyle}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
