import React, { Component } from 'react';
import { connect } from 'react-redux'
import registerMemo from "./../actions/registerMemo";

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
    var onClick;
    if(this.props.isPlusButton){
      onClick = this.props.plusLevel;
    }else{
      onClick = this.props.minusLevel;
    }
  
    return(
      <div>
        <button style={buttonStyle} onClick={e => onClick(e)}>plus</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}
const mapDispatchToProps = dispatch => {
  return {
    plusLevel: e => dispatch(registerMemo.plusLevel(e)),
    minusLevel: e => dispatch(registerMemo.minusLevel(e)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelShiftButton);
