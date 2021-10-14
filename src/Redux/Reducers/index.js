import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import getAllUserReducer from './getAllUserReducer';
import getLogsReducer from './getLogsReducer';
import updateUserReducer from './updateUserReducer';
import updateLogReducer from './updateLogReducer';
import deleteUserReducer from './deleteUserReducer';

const rootReducer = combineReducers({
    loginReducer,
    getAllUserReducer,
    signupReducer,
    getLogsReducer,
    updateUserReducer,
    updateLogReducer,
    deleteUserReducer
})

export default rootReducer