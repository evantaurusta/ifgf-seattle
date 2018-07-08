import React, { Component } from 'react';
import CaregroupCard from '../../components/Card/CaregroupCard';

import './Caregroup.css';

export default class CareGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Care Group</h1>
        <div className='caregroup'>
          <CaregroupCard />
        </div>

      </React.Fragment>
    );
  }
}
