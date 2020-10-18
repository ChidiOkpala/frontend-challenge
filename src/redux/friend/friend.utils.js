export const addMessage = (friends, newMessage, messageId, time) => {
    const myArr = [];
    friends.map((friend) => {
        if(friend.id === messageId.id){
            const newFriend = Object.assign({}, friend);
            const myMess = {text: newMessage, time: time};
            newFriend.messages.push(myMess)
            return myArr.push(newFriend);
        }
        else{
            return myArr.push(friend);
        }
    })
    return myArr;
};

