import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from 'components/CustomButtons/Button.jsx';

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/about" color="transparent" className={classes.navLink}>
          About
        </Button>
        <Button href="/caregroups" color="transparent" className={classes.navLink}>
          Caregroups
        </Button>
        <Button href="/pray" color="transparent" className={classes.navLink}>
          Prayer Request
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
