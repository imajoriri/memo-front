import act from "./actions/action";

const initialState = {
  text: "default"
} 

function reducer(state = initialState, action) {
  // そのままstateを変更はできない
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer;
