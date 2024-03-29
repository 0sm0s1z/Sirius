// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './Home.css';

class TopVulns extends React.Component {
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
              Top Vulnerabilities
              <hr></hr>
            </Typography>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              5 - CVE-2017-0145 - Remote Code Execution
            </Typography>
            <hr></hr>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              2 - CVE-2020-8196 - Application Delivery Controller (ADC), Gateway, and SDWAN WANOP
            </Typography>
            <hr></hr>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              78 - CVE-2021-38647 - Microsoft Azure Open Management Infrastructure (OMI) Remote Code Execution Vulnerability
            </Typography>
            <hr></hr>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              13 - CVE-2021-34473 - Microsoft Exchange Server Remote Code Execution Vulnerability
            </Typography>
            <hr></hr>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default TopVulns;
