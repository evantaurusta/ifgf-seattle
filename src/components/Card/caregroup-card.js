import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./caregroup-card.css";
import Axios from "axios";

export default class CareGroupCard extends Component {
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
    Axios.get(
      "https://fast-badlands-36660.herokuapp.com/care-groups",
      config
    ).then(res => {
      this.setState({
        caregroups: res.data
      });
    });
  }
  /**
   * Populate a singleton card for a single caregroup
   */
  populate = () => {
    if (this.state.caregroups.length === 0) {
      return null;
    }
    return this.state.caregroups.map((cg, index) => {
      return (
        <div className="Card" key={index}>
          <Card>
            <CardContent>
              <Typography component="p">{cg.Name}</Typography>
              <Typography component="p">
                {cg.ShortName}
                {cg.Description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Share</Button>
              <Button>Learn More</Button>
            </CardActions>
          </Card>
        </div>
      );
    });
  };

  render() {
    return <div>{this.populate()}</div>;
  }
}
