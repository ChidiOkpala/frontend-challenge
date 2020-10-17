import React from 'react';
import { connect  } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './message-box.styles.css';
import "../../assets/bootstrap/css/bootstrap.min.css";

import { selectMessage } from '../../redux/message/message.selector';

class MessageBox extends React.Component  {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
      
      componentDidMount() {
        this.scrollToBottom();
      }

    componentDidUpdate(){
        this.scrollToBottom();
    }
    render(){
        const {message} = this.props;
        return(
            <div className="chat-area">
                {
                    message ? (
                        message.map(({text, time}, idx) =>
                        <div key={idx}>
                            <div className="chat1 mt-4">
                                <div className="chat-bubble right">
                                    <div className="chat-text">{text}</div>
                                    <span className="time">{time}</span>
                                </div>
                            </div>
                        </div>
                        )
                    ) : (
                        <div> CHOOSE A FRIEND TO CHAT WITH </div>
                    )
                }
                <div ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        )    
    }
};

const mapStateToProps = createStructuredSelector({
    message: selectMessage
});

export default connect(mapStateToProps, null)(MessageBox);
