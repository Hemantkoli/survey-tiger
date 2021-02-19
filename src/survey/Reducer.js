import {combineReducers} from 'redux';
const questionReducer =(state=[],action) =>{
            console.error({state:state,action:action})
            switch(action.type){
                    case 'add_question':
                                            console.error("ADD Q CALLED")
                                            let t= state;
                                            t.push(action.payload)
                                            return t;
                    default:
                            return state;
            }
}   
const Demo =(state,action) =>{
    switch(action.type){
            case 'add_question':
                        return state.push(action.payload)
            default:
                    return state;
    }
} 

const allReducers = combineReducers({
    questions: questionReducer
})
export default  allReducers;