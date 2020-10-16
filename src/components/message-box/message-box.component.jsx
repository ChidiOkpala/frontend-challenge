import React from 'react';
import { connect  } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMessage } from '../../redux/message/message.selector';

import './message-box.styles.css';

// Bootstrap core CSS
import "../../assets/bootstrap/css/bootstrap.min.css";

class MessageBox extends React.Component  {

    shouldComponentUpdate(nextProps) {
        this.forceUpdate();
        return nextProps !== this.props ? true : true
    }
    render(){
        const {message} = this.props;
        
        return(
            <div className="chat-area">
                {
                    message ? (
                        message.map(({text}, idx) =>
                        <div key={idx}>
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
    }
};

const mapStateToProps = createStructuredSelector({
    message: selectMessage
});

export default connect(mapStateToProps, null)(MessageBox);
