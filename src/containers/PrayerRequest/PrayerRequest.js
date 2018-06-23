import React, { Component } from 'react';
import { Form, Text, TextArea } from 'react-form';
import './PrayerRequest.css';

export default class PrayerRequest extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            message: ''
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log('Email: ' + this.state.email);
        console.log('Message: ' + this.state.message);
    }

    changeEmail = (email) => {
        this.setState({ email });
    }

    changeMessage = (message) => {
        this.setState({ message });
    }

    render() {
        return (
            <div id="prayer-request" className="container">
                <h1>Prayer Request</h1>
                <p>All information will be kept confidential. If you would like us to reach back to you, please leave either your email or phone number below, and we will respond as soon as possible. We look forward to hearing your breakthrough!</p>
                <div id="form-wrap">
                    <Form>
                        <form onSubmit={this.submitForm}>
                            <Text className="field email" field="email" placeholder="Your E-mail Address" onChange={this.changeEmail} />
                            <Text className="field name" field="name" placeholder="(Optional) Your name" />
                            <TextArea className="field message" field="message" placeholder="What do you need prayer for?" onChange={this.changeMessage} />
                            <button type="submit">Submit</button>
                        </form>
                    </Form>
                </div>
            </div>
        );
    }

}
