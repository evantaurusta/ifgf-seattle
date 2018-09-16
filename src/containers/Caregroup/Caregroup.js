import React, { Component } from 'react';
import Config from 'config.json';
import Axios from 'axios';
import CaregroupCard from 'components/Card/CaregroupCard';

class CareGroup extends Component {

  constructor() {
    super();
    this.state = {
      caregroups: [],
      result: {}
    };
  }

  componentDidMount() {
    const config = {
      auth: {
        username: process.env.REACT_APP_API_USER,
        password: process.env.REACT_APP_API_PW
      }
    };
    Axios.get(Config.api.host + '/care-groups', config).then(res => {
      this.setState({
        caregroups: res.data
      });
    });
  }

  /**
   * Populate card with data from the api
   */
  populate = () => {
    if (this.state.caregroups.length === 0) {
      return null;
    }
    return this.state.caregroups.map((cg, index) => {
      return (
        <CaregroupCard caregroup={cg} key={index}/> 
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Care Group</h1>
        {this.populate()}
      </React.Fragment>
    );
  }
}
export default withStyles(CareGroupStyle)(CareGroup);
