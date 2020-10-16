import React from 'react';
import { connect  } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFriends } from '../../redux/friend/friend.selector';

import {messageActionDispatcher, idActionDispatcher} from '../../redux/message/message.action';

import './friends-list.styles.css';
// Bootstrap core CSS
import "../../assets/bootstrap/css/bootstrap.min.css";

const Friends = ({friends, messageDispatcher, idDispatcher}) => {
    return(
        <div  className="list-group list-group-flush">
            {
                friends.length > 0 ? (
                    friends[0].map(({id, imageUrl, name, messages}, idx) =>
                    <button className="list-group-item list-group-item-action bg-light" key={idx} onClick={() => {
                        messageDispatcher(messages);
                        idDispatcher(id);
                    }}
                    >
                        <img className='image mr-2' alt='profile' src={imageUrl}/>
                        {name}
                    </button>
                    )
                ) : (
                    <div></div>
                )
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    friends: selectFriends
});

const mapDispatchToProps = dispatch => ({
    messageDispatcher: message => dispatch(messageActionDispatcher(message)),
    idDispatcher: id => dispatch(idActionDispatcher(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
