import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LevelShiftButton from "./components/LevelShiftButton";
import LevelCircle from "./components/LevelCircle";
import InputForm from "./components/InputForm";
import SendButton from "./components/SendButton";
import LevelSelectButton from "./components/LevelSelectButton";
import Memos from "./components/Memos";

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
        <Grid fluid={true}>

          {/* 画面上のメモレベル変更の丸いボタン */}
          <Row style={LevelShiftGroupStyle} className="LevelShiftGroup">
            <Col md={6} xs={4}>
              <LevelShiftButton isPlusButton={false}/>
            </Col>
            <Col xs={4}>
              <LevelCircle />
            </Col>
            <Col md={6} xs={4} >
              <LevelShiftButton isPlusButton={true}/>
            </Col>
          </Row>

          {/* メモ入力フォーム*/}
          <Row style={InputFormGroupStyle} className="InputFormGroup">
            <InputForm />
          </Row>

          {/* 表示するメモのレベル変更ボタン */}
          <Row className="ButtonGroup">
            <Col xs={8}>
                <LevelSelectButton />
            </Col>
            <Col xs={4} style={SendButtonColStyle}>
              <SendButton />
            </Col>
          </Row>

          {/* メモ一覧 */}
          <Row className="MemosGroup">
            <Memos />
          </Row>

        </Grid>
      </div>
    );
  }
}

export default App;
