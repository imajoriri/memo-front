import action from "./../actions/action";
import store from "./../store";

export default {
  onChange: (e) => {
    return {
      type: action.INPUT_MEMO,
      memo: e.target.value,
    }
  },

  plusLevel: (e) => {
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

  minusLevel: (e) => {
    var memoWriteLevel = store.getState().memoWriteLevel

    var newMemoWriteLevel;
    if(memoWriteLevel <= 1){
      newMemoWriteLevel = 1;
    }else{
      newMemoWriteLevel = memoWriteLevel - 1;
    }
    
    return {
      type: action.PLUS_LEVEL,
      newMemoWriteLevel: newMemoWriteLevel,
    }
  },

}
