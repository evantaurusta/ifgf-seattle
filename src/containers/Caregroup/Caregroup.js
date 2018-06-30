import React, { Component } from 'react';
import CareGroupCard from '../../components/Card/caregroup-card';

import './Caregroup.css';

export default class CareGroup extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Care Group</h1>
                <div className='container'>
                    <CareGroupCard/>
                </div>
                
            </React.Fragment>
        );
    }
}
