import friendsMessage from './friend.types';

export const dispatchFriendMessage = (value, id) => {
    return {
        type: friendsMessage.FRIENDSMESSAGE,
        payload: value,
        id: id
    }
};
