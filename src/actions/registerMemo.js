import action from "./../actions/action";
import store from "./../store";
import { firebaseDb } from "./../firebase";

export default {
  onChange: async (e) => {
    return {
      type: action.INPUT_MEMO,
      memo: e.target.value,
    }
  },

  // プラスボタンが押された時。
  plusLevel: async (e) => {
    var memoWriteLevel = store.getState().memoWriteLevel

    var newMemoWriteLevel;
    if(memoWriteLevel >= 3){
      newMemoWriteLevel = 3;
    }else{
      newMemoWriteLevel = memoWriteLevel + 1;
    }

    return {
      type: action.PLUS_LEVEL,
      newMemoWriteLevel: newMemoWriteLevel,
    }
  },

  // マイナスボタンが押された時
  minusLevel: async (e) => {
    var memoWriteLevel = store.getState().memoWriteLevel

    var newMemoWriteLevel;
    if(memoWriteLevel <= 1){
      newMemoWriteLevel = 1;
    }else{
      newMemoWriteLevel = memoWriteLevel - 1;
    }

    return {
      type: action.MINUS_LEVEL,
      newMemoWriteLevel: newMemoWriteLevel,
    }
  },

  // 送信ボタンが押された時。
  // 入力フォームは空にする
  sendMemo: async (e) => {
    // 現在の日にちのメモを取得。なかったら作成。
    var now = new Date();  
    // 日にちのKey
    var todayKey = String(now.getFullYear()) 
      + ( '00' + String(now.getMonth() + 1)).slice(-2)
      + ( '00' + String(now.getDate() + 1)).slice(-2)
    // 時間のKey
    var timeKey = String(now.getFullYear())
      + ( '00' + String(now.getMonth() + 1)).slice(-2)
      + ( '00' + String(now.getDate() + 1)).slice(-2)
      + ( '00' + String(now.getHours() + 1)).slice(-2)
      + ( '00' + String(now.getMinutes() + 1)).slice(-2)
      + ( '00' + String(now.getSeconds() + 1)).slice(-2)

    var state = store.getState();

    // var memo = state.memo

    // stateにmemoを保存しておくと日本語入力が不可
    var memo = document.getElementById("memoInput").value;
    document.getElementById("memoInput").value = "";
    console.log(memo)

    if(memo){
      // DBに保存
      firebaseDb.child(todayKey).child(timeKey).set({
        memo: memo,
        level: state.memoWriteLevel,
        timeKey: timeKey,
      })
    }

    return{
      type: action.SEND_MEMO,
      memo: "",
    }
  }

}
