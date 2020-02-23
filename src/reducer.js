import { combineReducers } from 'redux';
import { BUTTON_PRESSED, CHANGE_TEXT } from './actions';

const INITIAL_STATE = {
    number: '',
    text: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUTTON_PRESSED:
            return {...state, number: action.number}
        case CHANGE_TEXT:
            return {...state, text: action.text}
        default:
            return state;
    }
};

// function pressed(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case BUTTON_PRESSED:
//         return {...state, number: action.number}
//     case CHANGE_TEXT:
//         return {...state, text: action.text}
//     default:
//         return state;
//   }
// }

// const calculator = combineReducers({
//     pressed,
// })

// export default calculator;