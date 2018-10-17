import React from 'react';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';

import { withStyles } from '@material-ui/core';

import CardStyle from './Styles/CardStyle';

const CaregroupCard = ({caregroup, classes, index}) => 
  <React.Fragment>
    <img className={classes.imgCardTop} src={caregroup.MainPhotoPath} alt={caregroup.Name} />
    <Card>
      <CardBody>
        <h4 className={classes.cardTitle}>{caregroup.Name}</h4>
        <p>{caregroup.ShortName}</p>
        <p>{caregroup.Description}</p>
      </CardBody>
    </Card>
  </React.Fragment>
;

export default withStyles(CardStyle)(CaregroupCard);
