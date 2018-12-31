import React, { Component } from 'react';
import { connect } from 'react-redux'

var buttonStyle = {
  backgroundColor: "white",
  width: "50px",
  height: "50px",
  border: "1px black solid",
  borderRadius: "50%",
}

class LevelShiftButton extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <button style={buttonStyle}>plus</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LevelShiftButton);
