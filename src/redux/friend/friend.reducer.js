import FRIENDS from './friend.data';

import friendsMessage from './friend.types';

import { addMessage } from './friend.utils';

const initial_state = {
    friends: FRIENDS
};

const friendReducer = (state = initial_state, action) => {
    switch(action.type){
        case friendsMessage.FRIENDSMESSAGE:
            return Object.assign({}, state, {friends: addMessage(state.friends, action.payload,action.id)})
            // {
            //     ...state,
            //     friends : addMessage(state.friends, action.payload, action.id)
            // }
        default:
            console.log(state)
            return state;
    }
} 

export default friendReducer;
