export const addMessage = (friends, newMessage, messageId) => {
    console.log(friends, newMessage, messageId)
    friends.map((friend) => {
        if(friend.id === messageId){
            return [...friend.messages, {text: newMessage}]
        }
        return friend;
    })
    return friends;
};
