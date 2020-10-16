export const addMessage = (friends, newMessage, messageId) => {
    const myArr = [];
    friends.map((friend) => {
        if(friend.id === messageId.id){
            const newFriend = Object.assign({}, friend);
            const myMess = {text: newMessage};
            newFriend.messages.push(myMess)
            console.log(newFriend)
            return myArr.push(newFriend);
        }
        else{
            return myArr.push(friend);
        }
    })
    return myArr;
};
