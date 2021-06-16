import { createStore } from "redux";

const inputReducer = (state, action) => {
  if (action.type === "add") {
    return {
      calculatedValue: 0,
      input: state.input + action.value,
    };
  } else if (action.type === "clearAll") {
    return {
      calculatedValue: 0,
      input: "",
    };
  } else if (action.type === "evaluate") {
    return {
      calculatedValue: new Function("return " + state.input)(),
      input: new Function("return " + state.input)(),
    };
  }
  return state;
};

const store = createStore(inputReducer, {
  input: "",
  calculatedValue: null,
});

export default store;
