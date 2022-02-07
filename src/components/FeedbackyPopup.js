import React, { Component } from 'react';
import '../styles/Feedbacky.css'
import closeIcon from '../images/ic-close.png'
import PropTypes from 'prop-types';

class FeedbackyPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            sendFeedback: false,
            isRequestSuccessful: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    sendFeedback() {
        if (this.state.value !== '') {
            const data = {
                customerId: this.props.customerId,
                message: this.state.value,
            };
            fetch(this.props.url,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true
                    },
                    body: JSON.stringify(data),
                }
            )
                .then(res => {
                    this.setState({ sendFeedback: true });
                    if (res.ok) {
                        this.setState({ isRequestSuccessful: true });
                    }
                })
                .catch(err => {
                    this.setState({ sendFeedback: true });
                    console.log(err);
                });
        } else {
            alert("please input text")
        }
    }

    render() {
        return (
            <div className='popup_inner'>
                <input type="image" className='close_icon' src={closeIcon} onClick={this.props.closePopup} alt='close_icon' />
                {!this.state.sendFeedback ?
                    <div className='popup_form'>
                        <h3>{this.props.title}</h3>
                        <textarea rows='7' cols='35' value={this.state.value} onChange={this.handleChange} maxLength='2000' wrap='soft' />
                        <button onClick={this.sendFeedback}>Send</button>
                    </div>
                    :
                    <div>
                        {this.state.isRequestSuccessful ?
                            <div>
                                <h1 className='successMessage'>We have got your feedback</h1>
                            </div>
                            :
                            <div>
                                <h1 className='failedMessage'>A technical problem has occurred. Please try again later.</h1>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

FeedbackyPopup.propTypes = {
    customerId: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
};

FeedbackyPopup.defaultProps = {
    customerId: 'customerId',
    url: 'http://localhost:8080/feedbacky-api/sendFeedback',
    title: 'Send Your Feedback'
};

export default FeedbackyPopup;