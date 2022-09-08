import { legacy_createStore as createStore } from 'redux';



const initialState = {details : {}, step:1, maxStep:4};


const PathReducer =  (state = initialState, action) =>{
    switch(action.type){
        case "NEXT":
            return{
                details:{...state.details, ...action.payload},
                step: state.step + 1
            }
        case "PREV":
            return {details:{...state.details, ...action.payload}};
            default : return state;
    }
}   



const store = createStore(PathReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
