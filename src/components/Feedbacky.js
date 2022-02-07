import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackyPopup from './FeedbackyPopup';
import '../styles/Feedbacky.css'

class Feedbacky extends Component {
    constructor(props) {
        super(props);

        var iconWidth = '24px';
        var iconHeight = '24px';
        var title = 'Send Your Feedback';
        var url = 'http://localhost:8080/feedbacky-api/sendFeedback';
        if (this.props.width && this.props.height) {
            iconWidth = this.props.width;
            iconHeight = this.props.height;
        }

        if (this.props.title) {
            title = this.props.title;
        }

        if (this.props.url) {
            url = this.props.url;
        }

        this.state = {
            customerId: this.props.customerId,
            width: iconWidth,
            height: iconHeight,
            title: title,
            url: url,
            showPopup: false
        }
        this.togglePopup = this.togglePopup.bind(this);
        this.getIcon = this.getIcon.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    getIcon() {
        if (this.props.iconColor) {
            return require('../images/ic-feedback-' + this.props.iconColor + '.png');
        } else {
            return require('../images/ic-feedback-black.png');
        }
    }

    render() {
        const image = this.getIcon();
        const style = {
            width: this.state.width,
            height: this.state.height
        };
        return (
            <div>
                <input type="image" className='feedbacky_icon' src={image} onClick={this.togglePopup} alt='feedbacky_icon' style={style} />
                {this.state.showPopup ?
                    <div className='popup'>
                        <FeedbackyPopup
                            url={this.state.url}
                            title={this.state.title}
                            closePopup={this.togglePopup.bind(this)}
                        />
                    </div>
                    : null
                }
            </div>
        );
    }
}

Feedbacky.propTypes = {
    customerId: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string,
};

Feedbacky.defaultProps = {
    customerId: 'customer-1',
    url: 'http://localhost:8080/feedbacky-api/sendFeedback',
    iconColor: 'black',
    width: '24px',
    height: '24px',
    title: 'Send Your Feedback'
};

export default Feedbacky;