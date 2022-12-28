import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';


export const appReducer = combineReducers({
    user : ItemsReducer,
});