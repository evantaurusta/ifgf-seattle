import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import Config from './../../config.json';
import { withStyles } from '../../../node_modules/@material-ui/core';

const CardStyle = theme => ({
  card: {
    display: 'flex',
    margin: 16,
    width: 1000,
    height: 400,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    width: 500,
    height: 500,
  },
  title:{
    'margin-top': 10,
    'margin-bottom': 10,
  }
});

class CaregroupCard extends Component {

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
    Axios.get(Config.api.host + '/care-groups', config).then(res => {
      this.setState({
        caregroups: res.data
      });
    });
  }
  // /**
  //  * Populate a singleton card for a single caregroup
  //  */
  populate = () => {
    const {classes} = this.props;
    if (this.state.caregroups.length === 0) {
      return null;
    }
    return this.state.caregroups.map((cg, index) => {
      return (
        <div key={index}>
          <Card
            className={classes.card}
          >
            <img
              className={classes.image}
              src={cg.MainPhotoPath}
              name={cg.Name}
              alt={cg.Name}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography className={classes.title} variant='title'>
                  {cg.Name}
                </Typography>
                <Typography variant='subheading'>
                  {cg.ShortName}
                  {cg.Description}
                </Typography>
              </CardContent>

            </div>
          </Card>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {this.populate()}
      </div>
    );
  }

}

export default withStyles(CardStyle)(CaregroupCard);
