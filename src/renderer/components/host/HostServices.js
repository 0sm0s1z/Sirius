// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import Security from '@mui/icons-material/Security';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

import '../Home.css';

class HostOverview extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  render() {
    return (
      <div className="leftcard">
        <Card sx={{ minWidth: 275 }} className="">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Services
              <hr></hr>
            </Typography>

            <Typography sx={{ paddingLeft: '12px' }} variant="h8" component="div">
              Apache 2.4.1
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default HostOverview;
