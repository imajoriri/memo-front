import React, { Component } from 'react';
import { connect } from 'react-redux'

var memoDivStyle = {
  margin: "10px 0px",
}

var memoStyle = {
  border: "black 1px solid",
  borderBottom: "none",
  padding: "5px",
  margin: "0px",
}

class Memos extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var memo = <p style={memoStyle} >memo</p>;
    return(
      <div style={memoDivStyle}>
        {memo}
        {memo}
        {memo}
        {memo}
        {memo}
        {memo}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memos);
