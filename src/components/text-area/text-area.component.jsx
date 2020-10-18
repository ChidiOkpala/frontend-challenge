import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "../../assets/bootstrap/css/bootstrap.min.css";

import { selectId } from '../../redux/friend/friend.selector';
import { dispatchFriendMessage } from '../../redux/friend/friend.actions';
import { newMessageDispatcher } from '../../redux/message/message.action';

const TextArea = ({textValue, messageDispatcher, id}) => {
    return(
        <form onSubmit={e => {
            e.preventDefault();
            let current_time = new Date();
            let time=current_time.getHours()+":"+(current_time.getMinutes()<10?'0':'')+current_time.getMinutes();
            let textAreaValue = document.getElementById('newText');
                if(id && !!textAreaValue.value){
                    messageDispatcher(textAreaValue.value, `${time}`);
                    textValue(textAreaValue.value, id, `${time}`);
                    textAreaValue.value = '';
                }if(id && textAreaValue.value === ''){
                    textAreaValue.placeholder = 'TYPE SOMETHING...';
                }
                else {
                    textAreaValue.placeholder = 'PLEASE CHOOSE A FRIEND'
                }
            }
        } className='form-group shadow-textarea'>
            <textarea className='w-100 form-control z-depth-1' id="newText" placeholder="start a conversation"></textarea>
            <button type="submit" className='btn btn-primary mt-1 px-5'>Send</button>
        </form>
    )
}

const mapStateToProps = createStructuredSelector({
    id : selectId
});

const mapDispatchToProps = dispatch => ({
    textValue : (value, id, time) => dispatch(dispatchFriendMessage(value, id, time)),
    messageDispatcher: (value, time) => dispatch(newMessageDispatcher(value, time))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
