import React from 'react';
import Feedbacky from './Feedbacky';

export default {
    title: 'Components/Feedbacky',
    component: Feedbacky,
    argTypes: {
        iconColor: {
            options: ['black', 'blue', 'gray', 'green', 'orange', 'purple', 'red', 'white', 'yellow'],
            control: { type: 'select' },
        }
    },
};

const Template = (args) => <Feedbacky {...args} />;

export const Default = Template.bind({});
Default.args = {
    customerId: 'customer-1',
    url: 'http://localhost:8080/feedbacky-api/sendFeedback',
    iconColor: 'black',
    width: '24px',
    height: '24px',
    title: 'Send Your Feedback',
};