import friendsMessage from './friend.types';

export const dispatchFriendMessage = (value, id, time) => {
    return {
        type: friendsMessage.FRIENDSMESSAGE,
        payload: value,
        id: id, 
        time: time
    }
};
