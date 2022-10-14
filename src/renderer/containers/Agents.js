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
import '../components/agent/Agent.css';
import logo from '/assets/logo.png';

import DashCards from '../components/DashCards.js';
import VulnPieGraph from '../components/VulnPieGraph.js';
import VulnFilter from '../components/VulnFilter.js';

//Host Compoments
import AgentFinder from '../components/agent/AgentFinder.js';
import TerminalPrompt from '../components/agent/TerminalPrompt.js';
import TerminalCanvas from '../components/agent/TerminalCanvas.js';

import VulnList from '../components/VulnList.tsx';


import { taskAgent, getHosts, getTerminalHistory } from '../actions/api/db.js'


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

class Agents extends React.Component {
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
      terminalHistory: [{}],
    };
    this.toggleNewHost = this.toggleNewHost.bind(this)
    this.setSelectedHost = this.setSelectedHost.bind(this)
    this.disableViews = this.disableViews.bind(this)
    this.handleCommand = this.handleCommand.bind(this)
    this.createTaskID = this.createTaskID.bind(this)
  }

  componentDidMount() {
    getHosts()
      .then(hosts => {
        console.log(hosts)
        this.setState({ hostList: hosts })
      });
      //.then(data => this.setState({ data }));
      setInterval(() => {
        getTerminalHistory()
          .then(history => {
            console.log(history)
            this.setState({ terminalHistory: history })
          });
      }, 1000);
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
  handleCommand(hosts, command) {
    console.log(hosts)
    console.log(command)
    let encodedCommand = btoa(command)
    let newHistory = this.state.terminalHistory

    //Filter for special commands
    if (command == "reset") {
      this.setState({terminalHistory : [{}]});
    } else {
      //Deliver command to agent and push to history
      for (let i = 0; i < hosts.length; i++) {
        let cmdid = 1
        if (this.state.terminalHistory) {
          cmdid = this.state.terminalHistory.length
        }
        console.log(cmdid)
        let newCommand = {
          id : cmdid,
          IP : hosts[i],
          Command : encodedCommand,
          Result : "PENvbW1hbmQgU2VudD4K"
        }
        newHistory.push(newCommand)
        //Send to DB
        /*
        Docs:
        type SiriusAgent
          AgentId string
          HostKey string
          IP      string
          OS      string
          Tasks   []Task
        type Task
        	ID 		string
        	Type    string
        	Date    time.Time
        	Command string
        	Result	string
        	Status  string
        */
        const utcTimestamp = new Date().getTime();
        var taskID = this.createTaskID(hosts[i])
        const task = {
          agentid: "13859332",
          ip: hosts[i],
          hostkey: "",
          os: "",
          tasks: [{
            id: taskID,
            type: "c",
            command: encodedCommand,
            result: "",
            status: "",
            date: utcTimestamp,
          }]
        }
        console.log(task)
        taskAgent(task)
          .then(res => {
            console.log(res)
          });
      }
      this.setState({terminalHistory : newHistory});
    }
  }
  createTaskID(host) {
    var taskID = Math.floor(Math.random() * 900000000 )
    var taskID = "AGENT-" + host + "-" + taskID
    return taskID
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
      <div className="terminalcontainer">
        <div className="terminalbody">
          <div className="terminalheader">
            <Grid container spacing={2}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={4}>
                <AgentFinder hostList={this.state.hostList} setSelectedHost={this.setSelectedHost}/>
              </Grid>
            </Grid>
          </div>
          <TerminalCanvas terminalHistory={this.state.terminalHistory}/>
          <TerminalPrompt handleCommand={this.handleCommand} />
          <div className="terminalbg">
          </div>
        </div>
      </div>
    );
  }
}

export default Agents;
