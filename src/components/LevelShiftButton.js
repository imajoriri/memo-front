import React, { Component } from 'react';
import { connect } from 'react-redux'
import registerMemo from "./../actions/registerMemo";

import plusButton from "./../images/plus_button.png";
import minusButton from "./../images/minus_button.png";

var buttonStyle = {
  //backgroundColor: "#00DC94",
  //border: "1px white solid",
  //borderRadius: "50%",
  width: "60px",
  height: "60px",

}

var buttonImageStyle = {
  width: "60px",
  height: "60px",
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

    var imgSrc = this.props.isPlusButton ? plusButton : minusButton

    return(
      <div>
        <img src={imgSrc} style={buttonImageStyle} onClick={e => onClick(e)}/>
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
