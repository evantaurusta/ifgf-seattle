import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Parallax from 'components/Parallax/Parallax.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';

class Home extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <Parallax filter image={require('assets/img/ifgf-bg.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.containerHome}>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>
            <div>WOWWWWW</div>

          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Home);