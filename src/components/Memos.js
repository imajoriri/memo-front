import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from "./../store";
import memoList from "./../actions/memoList";
import { firebaseDb } from "./../firebase";

var memoDivStyle = {
  margin: "10px 0px",
}

const memoStyle = isLast => {
  var style = {
    borderTop: "#CCCCCC solid 1px",
    borderBottom: "none",
    padding: "5px",
    margin: "0px",
  }

  if(isLast){
    style.borderBottom = "#CCCCCC solid 1px"
  }

  return style;
}

class Memos extends Component {
  constructor(props){
    super(props);
    var now = new Date();  
    // 日にちのKey
    this.todayKey = String(now.getFullYear()) 
      + ( '00' + String(now.getMonth() + 1)).slice(-2)
      + ( '00' + String(now.getDate() + 1)).slice(-2)

    // DBに追加されたら発動
    firebaseDb.on('child_changed', (data) => {
      this.props.fetchData(data);
    })
    // その日最初のメモの時、child_changedだと発火しないので
    firebaseDb.on('child_added', (data) => {
      this.props.fetchData(data);
    })

  }

  async componentDidMount() {
    var data = await firebaseDb.child(this.todayKey).once("value")
    this.props.fetchData(data);
  }

  render(){
    var memoList = store.getState().memoList;
    var memoListLevel = store.getState().memoListLevel;

    var tmp = "";
    // メモ一覧をタグとして作成
    var memos = memoList.map( (memo, i) => {

      // 選択されているメモレベルのみを表示（0の場合は全て表示)
      if(memo.level === memoListLevel || memoListLevel === 0){

        // \nをa<br>に
        tmp = memo.memo.split("\n").map( m => {
          return <span key={i}>{m}<br /></span>
        });

        if(i === memoList.length - 1){
          return <p style={memoStyle(true)} key={i}>{tmp}</p>
        }else{
          return <p style={memoStyle(false)} key={i}>{tmp}</p>
        }
      }

    });

    return(
      <div style={memoDivStyle}>
        {memos}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (e) => dispatch(memoList.fetchData(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memos);
