import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Caregroup from 'containers/Caregroup/Caregroup';
import PrayerRequest from 'containers/PrayerRequest/PrayerRequest';
import About from 'containers/About/About';
import Home from 'containers/Home/Home';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.js';

require('dotenv').config({ path: __dirname + '/.env' });

const App = () => (
  <Router>
    <div>
      <Header
        color="white"
        brand="IFGF Seattle"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
      /> 
      <div id="main">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/care-groups" component={Caregroup} />
        <Route path="/pray" component={PrayerRequest}/>
      </div>
    </div>
  </Router>
);

export default App;
