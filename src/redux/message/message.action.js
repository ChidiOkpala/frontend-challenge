import messageActions from './message.type';

export const messageActionDispatcher = (message) => {
    return {
        type: messageActions.FRIENDSMESSAGE,
        payload: message
    }
};

export const idActionDispatcher = (id) => {
    return {
        type: messageActions.FRIENDSID,
        payload: id
    }
};

export const newMessageDispatcher = (message, time) => {
    console.log(time)
    return {
        type: messageActions.MESSAGEDISPATCH,
        payload: message,
        time:  time
    }
}
