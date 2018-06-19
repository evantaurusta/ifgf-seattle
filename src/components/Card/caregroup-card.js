import React, { Component } from 'react';
import './caregroup-card.css';
import Axios from 'axios';


export default class caregroupCard extends Component {

    constructor() {
        super();
        this.state = {
            caregroups: [],
            result: {}
        };
    }
    componentWillMount() {
        const config = {
            auth: {
                username: process.env.REACT_APP_API_USER,
                password: process.env.REACT_APP_API_PW
            }
        };
        console.log(config);
        Axios.get('https://fast-badlands-36660.herokuapp.com/care-groups', config).then(res => {
            console.log(res);
            this.setState({ 
                caregroups: res.data
            });
        });
    }
    /**
     * Populate a singleton card for a single caregroup
     */
    populate = () => {
        if (this.state.caregroups.length === 0) {
            return null;
        }
        return this.state.caregroups.map((cg, index) => {
            return (
                <div className="care-group-content">
                    {cg.Name}
                </div>
            );
        });
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
