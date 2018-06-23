import React, { Component } from 'react';
import CaregroupCard from '../../components/Card/caregroup-card';

export default class CareGroup extends Component {
    render() {
        return (
            <div>
                <h1>Care Group</h1>
                <CaregroupCard/>
            </div>
        );
    }
}
