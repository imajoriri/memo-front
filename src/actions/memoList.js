import action from "./../actions/action";
import store from "./../store";
import { firebaseDb } from "./../firebase";

export default {
  fetchData: async (data) => {
    var memos = [];

    // data.val()はオブジェクトなので配列にする
    for(var k in data.val()){
      memos.push(data.val()[k]);
    }

    // sort
    var memoList = memos.sort(function(a,b){
      if(a.timeKey> b.timeKey) return -1;
      if(a.timeKey<b.timeKey) return 1;
      return 0;
    });

    return {
      type: action.FETCH_DATA,
      memoList: memoList
    };
  },
}
