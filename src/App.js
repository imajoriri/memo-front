import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LevelShiftButton from "./components/LevelShiftButton";
import InputForm from "./components/InputForm";
import SendButton from "./components/SendButton";
import LevelSelectButton from "./components/LevelSelectButton";

var allGroupStyle = {
  padding: "10px",
}

var LevelShiftGroupStyle = {
  margin: "10px 0",
  textAlign: "center",
}
var InputFormGroupStyle = {
}
var LevelSelectGroupStyle = {
}
var SendButtonColStyle = {
  paddingRight: "0",
}

class App extends Component {
  render() {
    return (
      <div style={allGroupStyle}>
        <Grid fluid="true">

          <Row style={LevelShiftGroupStyle} className="LevelShiftGroup">
            <Col md={6} xs={5}>
              <LevelShiftButton />
            </Col>
            <Col md={6} xs={5} xsOffset={2}>
              <LevelShiftButton />
            </Col>
          </Row>

          <Row style={InputFormGroupStyle} className="InputFormGroup">
            <InputForm />
          </Row>

          <Row className="ButtonGroup">

            <Col xs="8">
                <LevelSelectButton />
            </Col>

            <Col xs="4" style={SendButtonColStyle}>
              <SendButton />
            </Col>

          </Row>

        </Grid>
      </div>
    );
  }
}

export default App;
