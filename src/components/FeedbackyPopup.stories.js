import React from 'react';
import FeedbackyPopup from './FeedbackyPopup';

export default {
    title: 'Components/FeedbackyPopup',
    component: FeedbackyPopup,
};

const Template = (args) => <FeedbackyPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
    customerId: 'customer-1',
    url: 'http://localhost:8080/feedbacky-api/sendFeedback',
    title: 'Send Your Feedback',
};
Default.decorators = [
    (Story) => (
        <div style={{ width: '75vh', minHeight: '75vh' }}>
            <Story />
        </div>
    ),
];