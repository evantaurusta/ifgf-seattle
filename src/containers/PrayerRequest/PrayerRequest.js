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
                <p>Our motto is PUSH, Pray Until Something Happens!</p>
                <div id="form-wrap">
                    <Form>
                        <form onSubmit={this.submitForm}>
                            <Text className="field email" field="email" placeholder="Your E-mail Address" onChange={this.changeEmail} />
                            <TextArea className="field message" field="message" placeholder="What do you need prayer for?" onChange={this.changeMessage} />
                            <button type="submit">Submit</button>
                        </form>
                    </Form>
                </div>
            </div>
        );
    }

}