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
import VulnFilter from '../components/VulnFilter.js';

//Host Compoments
import HostOverview from '../components/host/HostOverview.js';
import HostManager from '../components/host/HostManager.js';
import HostServices from '../components/host/HostServices.js';
import HostSoftware from '../components/host/HostSoftware.js';
import NewHost from '../components/host/NewHost.tsx';
import VulnList from '../components/host/VulnList.tsx';


import { getHosts, getVulnerabilityList } from '../actions/api/db.js'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  backgroundColor: null,
  lineHeight: '60px',
}));

const test = [
  {"data": "test"}
];

class Hosts extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      newhost: false,
      vulnerabilityview: false,
      selectedHost: "",
      hostList: [{
        "ip": ""
      }],
      vulnerabilityList: [{
        "cve": "CVE-2017-0145 - Remote Code Execution",
        "catagory": "RCE",
        "tags": "CISA Worm RCE Wild",
        "cvss": 9.8,
        "srs": 10,
        "description": 'The SMBv1 server in Microsoft Windows Vista SP2; Windows Server 2008 SP2 and R2 SP1; Windows 7 SP1; Windows 8.1; Windows Server 2012 Gold and R2; Windows RT 8.1; and Windows 10 Gold, 1511, and 1607; and Windows Server 2016 allows remote attackers to execute arbitrary code via crafted packets, aka "Windows SMB Remote Code Execution Vulnerability." This vulnerability is different from those described in CVE-2017-0143, CVE-2017-0144, CVE-2017-0146, and CVE-2017-0148.',
        "cia": "3,3,3"
      }],
    };
    this.toggleNewHost = this.toggleNewHost.bind(this)
    this.setSelectedHost = this.setSelectedHost.bind(this)
    this.disableViews = this.disableViews.bind(this)
  }

  componentDidMount() {
    getHosts()
      .then(hosts => {
        console.log(hosts)
        this.setState({ hostList: hosts })
      });
      setInterval(() => {
        getVulnerabilityList("{'CVE': ['CVE-2022-29457', 'CVE-2022-29458']}")
          .then(data => {
            console.log(data)
            this.setState({ vulnerabilityListed: data })
          });
      }, 10000);
      //.then(data => this.setState({ data }));
  }
  disableViews() {
    this.setState({
      vulnerabilityview: false,
      newhost: false
    });
  }

  toggleNewHost() {
    this.disableViews()
    this.setState({ newhost: true });
  }

  //Trigger fetchHosts... or such
  setSelectedHost = (ip) => {
    this.disableViews()
    this.setState({
      vulnerabilityview: true,
      selectedHost: ip
    });
  }

  render() {
    return (
      <div className="maincontainer">
        <div className="maincontent">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <HostManager toggleNewHost={this.toggleNewHost} setSelectedHost={this.setSelectedHost} hostList={this.state.hostList} />
              { this.state.vulnerabilityview ?
                <div>
                  <HostOverview hostDetails={this.state.selectedHost} />
                  <HostServices />
                  <HostSoftware />
                </div>
              : null }
            </Grid>
            <Grid item xs={8}>
              { this.state.vulnerabilityview ?
                <div>
                  <VulnFilter />
                  <VulnList vulnerabilityList={this.state.vulnerabilityList} />
                </div>
              : null }

              { this.state.newhost ?
                <NewHost disableViews={this.disableViews} />
              : null }
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Hosts;
