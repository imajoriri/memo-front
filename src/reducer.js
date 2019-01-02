import action from "./actions/action";

const initialState = {
  memoWriteLevel: 1,
  memo: "",
  memoList: [],
  memoListLevel: 0, // 0: 全て, 1~
} 

function reducer(state = initialState, act) {

  switch (act.type) {

    case action.INPUT_MEMO:
      return Object.assign({},state, {
        memo: act.memo
      });

    case action.PLUS_LEVEL:
    case action.MINUS_LEVEL:
      return Object.assign({},state, {
        memoWriteLevel: act.newMemoWriteLevel
      });

    case action.SEND_MEMO:
      return Object.assign({},state, {
        memo: act.memo,
      });

    // memoList
    case action.FETCH_DATA:
      return Object.assign({},state, {
        memoList: act.memoList,
      });

    case action.CHANGE_LEVEL:
      return Object.assign({},state, {
        memoListLevel: act.memoListLevel,
      });

    default:
      return state;
  }

}
export default reducer;
