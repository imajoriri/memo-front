import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LevelShiftButton from "./components/LevelShiftButton";
import LevelCircle from "./components/LevelCircle";
import LevelLine from "./components/LevelLine";
import InputForm from "./components/InputForm";
import SendButton from "./components/SendButton";
import LevelSelectButton from "./components/LevelSelectButton";
import Memos from "./components/Memos";
import Footer from "./components/Footer";

var allGroupStyle = {
  fontSize: "20px",
  padding: "0px",
  position: "relative",
  height: "100%",
}

var LevelShiftGroupStyle = {
  margin: "10px 0",
  textAlign: "center",
}
var InputFormGroupStyle = {
  padding: "0px 10px",
}
var LevelSelectGroupStyle = {
}
var ButtonGroupStyle = {
  margin: "10px 0px",
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
            <Col mdOffset={3} md={2} xs={4}>
              <LevelShiftButton isPlusButton={false}/>
            </Col>
            <Col md={2} xs={4}>
              <LevelLine />
            </Col>
            <Col md={2} xs={4} >
              <LevelShiftButton isPlusButton={true}/>
            </Col>
          </Row>

          {/* メモ入力フォーム*/}
          <Row style={InputFormGroupStyle} className="InputFormGroup">
            <Col mdOffset={3} md={6}>
              <InputForm />
            </Col>
          </Row>

          {/* 表示するメモのレベル変更ボタン */}
          <Row className="ButtonGroup" style={ButtonGroupStyle}>
            <Col mdOffset={3} md={2} xs={8}>
                <LevelSelectButton />
            </Col>
            <Col mdOffset={3} md={1} xs={4} style={SendButtonColStyle}>
              <SendButton />
            </Col>
          </Row>

          {/* メモ一覧 */}
          <Row className="MemosGroup">
            <Col mdOffset={3} md={6}>
              <Memos />
            </Col>
          </Row>

        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
