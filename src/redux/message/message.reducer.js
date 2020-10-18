import messageActions from './message.type';
import {updateMessageBox} from './message.utils';

const initial_state = [];

const id_state = 0;

export const messageReducer = (state = initial_state, action) => {
    switch(action.type){
        case messageActions.FRIENDSMESSAGE : 
            return {
                ...state,
                message: action.payload
            }
            
        case messageActions.MESSAGEDISPATCH:
            return {
                ...state,
                message: updateMessageBox(state.message, action.payload, action.time)
            }

        default: 
            return state;
    }
};

export const idReducer = (state = id_state, action) => {
    switch(action.type){
        case messageActions.FRIENDSID : 
            return {
                ...state,
                id: action.payload
            }

        default: 
            return state;
    }
};

export default {messageReducer, idReducer};
