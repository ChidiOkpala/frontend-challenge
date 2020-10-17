import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import friendReducer from './friend/friend.reducer';
import {messageReducer, idReducer } from './message/message.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['friends']
}

const rootReducer = combineReducers({
    friends: friendReducer,
    message: messageReducer,
    id: idReducer
})

export default persistReducer(persistConfig, rootReducer)