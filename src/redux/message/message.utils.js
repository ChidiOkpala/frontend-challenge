export const updateMessageBox = (messageState, payload, time) => {
  console.log(time)
  let newArr = [];
  messageState.map((mesage) => {
    newArr.push(mesage);
    return newArr
  })
  newArr.push({text: payload, time: time});
  return newArr;
}