import React, { Component } from 'react';
import './caregroup-card.css';
import Axios from 'axios';

export default class caregroupCard extends Component {
    GET_URL = 'https://fast-badlands-36660.herokuapp.com/sermons';
    constructor() {
        super();
        this.state = {
            caregroups: ["hello", "lalala", "lala"],
            result: {}
        }
    }
    componentWillMount() {
        Axios.get(this.GET_URL) 
        .then (res => {
            const result = res.data;
            this.setState({ result });
        })

    }
    populate() {
        let content = [];
        for(const cg of this.state.caregroups) {
            content.push(
                <div> 
                    {cg}
                </div>
            );
        }
        return content;
    }
    render() {
        return(
            <div className="card-container">
                <p>this is h1</p>
                {this.populate()}
            </div>
        );
    }
}