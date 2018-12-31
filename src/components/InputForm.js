import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

var inputStyle = {
  border: "black solid 1px",
  borderRadius: "10px",
  width: "100%",
  height: "150px",
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
              <textarea style={inputStyle} />
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm)
