import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import registerMemo from "./../actions/registerMemo";

var inputStyle = {
  border: "black solid 1px",
  borderRadius: "10px",
  width: "100%",
  height: "150px",
  padding: "5px",
}

class InputForm extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Row>
          <Col xs={12} xsOffset={0}>
            <form>
              <textarea style={inputStyle} 
                value={this.props.state.memo}
                onChange={(e) => this.props.onChange(e)}/>
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(registerMemo.onChange(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm)
