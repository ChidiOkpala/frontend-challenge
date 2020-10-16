import React from 'react';
import { connect  } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMessage } from '../../redux/message/message.selector';

import './message-box.styles.css';

// Bootstrap core CSS
import "../../assets/bootstrap/css/bootstrap.min.css";

const MessageBox = ({message}) => {
    console.log(message)
    return(
        <div className="chat-area">
            {
                message ? (
                    message.map(({id, text}) =>
                    <div key={id}>
                        <div className="chat1 mt-4">
                            <div className="chat-bubble right">
                                <div className="chat-text">{text}</div>
                            </div>
                        </div>
                    </div>
                    )
                ) : (
                    <div> start a conversation </div>
                )
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    message: selectMessage
});

export default connect(mapStateToProps, null)(MessageBox);
