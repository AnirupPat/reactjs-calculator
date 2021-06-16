import { createStore } from 'redux';


const inputReducer = (state, action) => {
    return state;
}

const store = createStore(inputReducer, {
    input: ""
});

export default store;