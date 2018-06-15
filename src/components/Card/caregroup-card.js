import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import './caregroup-card.css';
import Axios from 'axios';

export default class caregroupCard extends Component {
    constructor() {
        super();
        this.state = {
            caregroups: ['hello', 'lalala', 'lala'],
            result: {}
        };
    }
    componentWillMount() {
        Axios.get(this.GET_URL).then(res => {
            const result = res.data;
            this.setState({ result });
        });
    }
    populate() {
        let content = [];
        for (const cg of this.state.caregroups) {
            content.push(
                <div>
                    {cg}
                    <Alert color="info">hello world</Alert>
                </div>
            );
        }
        return content;
    }
    render() {
        return (
            <div className="card-container">
                <p>this is h1</p>
                {this.populate()}
            </div>
        );
    }
}
