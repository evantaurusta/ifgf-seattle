import React, { Component } from 'react';
import classNames from 'classnames';
import { Form, Text, TextArea } from 'react-form';
import withStyles from '@material-ui/core/styles/withStyles';
import Parallax from 'components/Parallax/Parallax.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import TextField from '@material-ui/core/TextField';

import prayerRequestPage from 'assets/jss/material-kit-react/views/PrayerRequestPage.jsx';

class PrayerRequest extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: ''
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <Parallax filter image={require('assets/img/ifgf-bg.jpg')}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <h2>Inside Parallax</h2>
            </GridItem>
          </GridContainer>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.containerHome}>
            <h1>Prayer Request</h1>
            <p>
              <em>
                Be joyful in hope, patient in affliction, faithful in prayer.
                <br />
                (Romans 12:12)
              </em>
            </p>
            <p>
              All information will be kept confidential. If you would like us to
              reach back to you, please leave either your email or phone number
              below, and we will respond as soon as possible. We look forward to
              hearing your breakthrough!
            </p>
            <p>IFGF Seattle Intercessor Ministry</p>

            <Form>
              <GridContainer>
                <GridItem>
                  <CustomInput
                    labelText="Your Email Address"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      disabled: false
                    }}
                  />
                </GridItem>
                <GridItem>
                  <CustomInput
                    labelText="Name (Optional)"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: false
                    }}
                  />
                </GridItem>
                <GridItem>
                  <CustomInput
                    labelText="Prayer"
                    id="prayer"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      disabled: false
                    }}
                  />
                </GridItem>
              </GridContainer>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(prayerRequestPage)(PrayerRequest);
