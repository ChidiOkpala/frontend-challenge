import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './text-area.styles.css';

import { selectId } from '../../redux/friend/friend.selector';
import { dispatchFriendMessage } from '../../redux/friend/friend.actions';

const TextArea = ({textValue, id}) => {
    return(
        <form onSubmit={e => {
            e.preventDefault();
                let newValue = document.getElementById('newText').value;
                
                textValue(newValue, id);
            }
        }>
            <textarea className='w-100' id="newText" placeholder="start a conversation"></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

const mapStateToProps = createStructuredSelector({
    id : selectId
});

const mapDispatchToProps = dispatch => ({
    textValue : (value, id) => dispatch(dispatchFriendMessage(value, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
