import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import CardStyle from './Styles/CardStyle';

const CaregroupCard  = ({caregroup, classes, index}) => 
  <React.Fragment key={index}>
    <Card className={classes.card}>
      <img
        className={classes.image}
        src={caregroup.MainPhotoPath}
        name={caregroup.Name}
        alt={caregroup.Name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant='title'>
            {caregroup.Name}
          </Typography>
          <Typography variant='subheading'>
            {caregroup.ShortName}
            {caregroup.Description}
          </Typography>
        </CardContent>

      </div>
    </Card>
  </React.Fragment>;

export default withStyles(CardStyle)(CaregroupCard);
