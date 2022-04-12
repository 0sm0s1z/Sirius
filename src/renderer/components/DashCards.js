// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import '../containers/Main.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  backgroundColor: null,
  lineHeight: '60px',
}));

class VulnOverTime extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);


    this.state = {
      open: false
    };
  }

  render() {

    return (
      <Grid className="dashbanner" container spacing={4}>
      <Grid item xs={3}>
        <Card sx={{ minWidth: 275 }} className="critical">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              CRITICAL VULNERABILITIES
            </Typography>
            <Typography sx={{ paddingLeft: '12px' }} variant="h4" component="div">
              5
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ minWidth: 275 }} className="info">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              HOSTS
            </Typography>
            <Typography sx={{ paddingLeft: '12px' }} variant="h4" component="div">
              21
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ minWidth: 275 }} className="moderate">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              TOTAL VULNERABILITIES
            </Typography>
            <Typography sx={{ paddingLeft: '12px' }} variant="h4" component="div">
              328
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ minWidth: 275 }} className="secure">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              SCANS
            </Typography>
            <Typography sx={{ paddingLeft: '12px' }} variant="h4" component="div">
              8
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    );
  }
}

export default VulnOverTime;
