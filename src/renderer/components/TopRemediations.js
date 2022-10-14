// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './Home.css';

class TopRemediations extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  render() {
    return (
      <div className="dashbox">
        <Card sx={{ minWidth: 275 }} className="">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Top Remediations
              <hr></hr>
            </Typography>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              1 - Microsoft Windows Cumultive Updates
            </Typography>
            <hr></hr>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              2 - Wordpress Updates
            </Typography>
            <hr></hr>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              3 - Apache Webserver Update
            </Typography>
            <hr></hr>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default TopRemediations;
