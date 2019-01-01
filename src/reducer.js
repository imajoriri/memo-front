import action from "./actions/action";

const initialState = {
  memoWriteLevel: 1,
  memo: "",
} 

function reducer(state = initialState, act) {

  switch (act.type) {

    case action.INPUT_MEMO:
      return Object.assign({},state, {
        memo: act.memo
      });

    case action.PLUS_LEVEL:
      return Object.assign({},state, {
        memoWriteLevel: act.newMemoWriteLevel
      });

    case action.SEND_MEMO:
      return Object.assign({},state, {
        memo: act.memo,
      });

    default:
      return state;
  }

}
export default reducer;
