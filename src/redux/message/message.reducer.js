import messageActions from './message.type';

const initial_state = [];

const id_state = 1;

export const messageReducer = (state = initial_state, action) => {
    switch(action.type){
        case messageActions.FRIENDSMESSAGE : 
            return {
                ...state,
                message: action.payload
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
