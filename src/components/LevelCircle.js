import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';

import store from "./../store"

// 円のstyle
// isCheckedがtrueの時は円の色を付け加える
var pStyle = isChecked => {
  var style = {
    width: "20px",
    height: "20px",
    border: "black solid 0.5px",
    borderRadius: "50%",
    margin: "auto",
    marginTop: "15px",
  }

  if(isChecked){
    style.backgroundColor = "black";
  }else{
    style.backgroundColor = "white";
  }

  return style;
}

var colStyle = {
  padding: "0",
}

class LevelCircle extends Component{
  constructor(props){
    super(props);
  }

  render(){
    // 円自体を入れていく
    var circleP = [];

    var memoWriteLevel = store.getState().memoWriteLevel;

    // for分で円の数分回していく
    // memoWriteLevelより小さかったら色を加える
    for(var i = 1; i <= 3; i++){
      if(i <= memoWriteLevel){
        circleP.push(<Col xs={4} style={colStyle}><p style={pStyle(true)}></p></Col>)
      }else{
        circleP.push(<Col xs={4} style={colStyle}><p style={pStyle(false)}></p></Col>)
      }
    }

    return(
      <div>
        <Row>
          {circleP}
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
