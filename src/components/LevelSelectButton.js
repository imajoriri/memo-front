import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';

import store from "./../store"
import memoList from "./../actions/memoList";

var buttonStyle = (key, memoListLevel) => {
  var result = {
    border: "#B3B3B3 solid 1px",
    borderRadius: "30% / 50%",
    backgroundColor: "white",
    width: "90%",
    height: "40px",
    opacity: "0.7",
  }

  // 選択されているボタンの色を変える
  if(key === memoListLevel){
    result.backgroundColor = "#00F5A4";
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

          <Col xs={4} style={colStyle}>
            <button style={buttonStyle(1, memoListLevel)} 
              onClick={e => this.props.changeMemoListLevel(1)}>
              1
            </button>
          </Col>

          <Col xs={4} style={colStyle}>
            <button style={buttonStyle(2, memoListLevel)} 
              onClick={e => this.props.changeMemoListLevel(2)}>
              2
            </button>
          </Col>

          <Col xs={4} style={colStyle}>
            <button style={buttonStyle(3, memoListLevel)} 
              onClick={e => this.props.changeMemoListLevel(3)}>
              3
            </button>
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
