import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';

import store from "./../store"
import memoList from "./../actions/memoList";

var buttonStyle = (key, memoListLevel) => {
  var result = {
    border: "black solid 1px",
    backgroundColor: "white",
    width: "100%",
    height: "40px",
  }

  if(key !== 3){
    result.borderRight = "none"
  }

  // 選択されているボタンの色を変える
  if(key === memoListLevel){
    result.backgroundColor = "blue";
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
    var memoListLevel = store.getState().memoListLevel;

    return(
      <div>
        <Row>
          <Col xs="4" style={colStyle}>
            <button style={buttonStyle(1, memoListLevel)} onClick={e => this.props.changeMemoListLevel(1)}>1</button>
          </Col>
          <Col xs="4" style={colStyle}>
            <button style={buttonStyle(2, memoListLevel)} onClick={e => this.props.changeMemoListLevel(2)}>2</button>
          </Col>
          <Col xs="4" style={colStyle}>
            <button style={buttonStyle(3, memoListLevel)} onClick={e => this.props.changeMemoListLevel(3)}>3</button>
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
    changeMemoListLevel: (level) => dispatch(memoList.changeMemoListLevel(level)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelectButton);
