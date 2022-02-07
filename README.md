# Feedbacky

Feedbacky is used for integrating a feedback system for client-side codebase.

React.js and Storybook are used in the application.

Library's component documentation is provided by Storybook.

Library is published on npm. You can access with the link below.

https://www.npmjs.com/package/feedbacky-react-component

<br/>

## Instructions

<br/>

Installation

```bash
npm install
```

<br/>

To Run Test Suite

```bash
npm test
```

<br/>

To Visit Storybook Documentation

```bash
npm run storybook
```

<br/>

## To Use Frontend Component Only

Use the package manager 'npm' to install Feedbacky.

```bash
npm i feedbacky-react-component
```

<br/>

## Usage

```JSX
import { Feedbacky } from 'feedbacky-react-component';

function Example() {
    return (
        <div className="Example">
            <Feedbacky />
        </div>
    )
```

<br/>

## Arguments

| Name       | Description |                                      Default Value |
| ---------- | :---------: | -------------------------------------------------: |
| customerId |   string    |                                       'customer-1' |
| url        |   string    | 'http://localhost:8080/feedbacky-api/sendFeedback' |
| iconColor  |   string    |                                            'black' |
| width      |   string    |                                             '24px' |
| height     |   string    |                                             '24px' |
| title      |   string    |                               'Send Your Feedback' |

### Icon Colors

You can choose a color for icon from the examples below.

- black
- blue
- gray
- green
- orange
- purple
- red
- white
- yellow

<br/>

## Request Attributes

<br/>

```javascript
    {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true
        },
        body: {
            'customerId': 'customer-1',
            'message': 'example feedback text'
        }
    }
```
