// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faIndustry, faTerminal, faScroll, faBars, faBug, faKey, faServer, faRadiation, faHeadphones, faTable, faDragon } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import './Main.css';
import logo from '/assets/logo.png';

import DashCards from '../components/DashCards.js';
import VulnPieGraph from '../components/VulnPieGraph.js';
import TopVulns from '../components/TopVulns.js';
import VulnOverTime from '../components/VulnOverTime.js';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  backgroundColor: null,
  lineHeight: '60px',
}));


class Dashboard extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  render() {
    return (
      <div className="maincontainer">
        <div className="maincontent">
          <DashCards />

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <VulnOverTime />
            </Grid>
            <Grid item xs={2}>
              <VulnPieGraph />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TopVulns />
            </Grid>
            <Grid item xs={4}>
              <VulnPieGraph />
            </Grid>
            <Grid item xs={4}>
              <VulnPieGraph />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Dashboard;
