import { legacy_createStore as createStore } from 'redux';



const initialState = {category:"",price:""};


const filterReducer =  (state = initialState, action) =>{
    switch(action.type){
        case "category":
            return{
                category : action.payload,
            }
        case "price":
            return {price: action.payload};
            default : return state;
    }
}   



const store = createStore(filterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
