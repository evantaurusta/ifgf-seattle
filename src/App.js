import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Caregroup from 'containers/Caregroup/Caregroup';
import PrayerRequest from 'containers/PrayerRequest/PrayerRequest';
import Home from 'containers/Home/Home';
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

require('dotenv').config({ path: __dirname + '/.env' });

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
    <Router>
      <div>
      <Header
        color="white"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      /> 
          <div id="main">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/caregroup" component={Caregroup} />
            <Route path="/pray" component={PrayerRequest}/>
          </div>
      </div>
    </Router>
);

export default App;
