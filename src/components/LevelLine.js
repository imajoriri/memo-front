import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';

import store from "./../store"

// isCheckedがtrueの時は円の色を付け加える
var pStyle = isChecked => {
  var style = {
    width: "30px",
    height: "3px",
    margin: "auto",
    marginTop: "28px",
  }

  if(isChecked){
    style.backgroundColor = "#00DC94";
  }else{
    style.backgroundColor = "rgb(243, 238, 238)";
  }

  return style;
}

var colStyle = {
  padding: "0",
}

class LevelLine extends Component{
  constructor(props){
    super(props);
  }

  render(){
    // 円自体を入れていく
    var lineP = [];

    var memoWriteLevel = store.getState().memoWriteLevel;

    // for分で円の数分回していく
    // memoWriteLevelより小さかったら色を加える
    for(var i = 1; i <= 3; i++){
      if(i <= memoWriteLevel){
        lineP.push(<Col xs={4} style={colStyle} key={i}><p style={pStyle(true)}></p></Col>)
      }else{
        lineP.push(<Col xs={4} style={colStyle} key={i}><p style={pStyle(false)}></p></Col>)
      }
    }

    return(
      <div>
        <Row>
          {lineP}
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

export default connect(mapStateToProps, mapDispatchToProps)(LevelLine);
