// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import './Agent.css';



class TerminalPrompt extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      hostList: [{
        "ip": ""
      }],
      selectedAgents: [{
        "ip": "192.168.1.15"
      }],
      terminal: "",
      selectedHost: ["192.168.1.15"],
      prepCommand: {
        hosts : ["192.168.1.15", "10.0.10.5"],
        command : "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetPrompt = this.resetPrompt.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit() {
    event.preventDefault();
    this.setState({
      prepCommand: {
        "hosts": this.state.selectedHost,
        "command": this.state.terminal,
      }
    });
    if (this.state.prepCommand) {
      this.props.handleCommand(this.state.selectedHost, this.state.terminal)
    }

    this.resetPrompt()
  }
  resetPrompt() {
    this.setState({
      terminal: ""
    });
  }

  render() {
    return (
      <div>
        <div className="terminaldressing">
          {this.state.selectedHost.map((ip) => {
            return (
                <span key={ip}>
                  ({ip}) /
                </span>
            );
          })}
        </div>
        <div className="terminalprompt">
          <form onSubmit={this.handleSubmit}>
          {'>'}
            <FormControl
              sx={{
                width: 1200,
                color: "#fff",
                marginLeft: 2,
              }}
            >
              <Input
                name="terminal"
                value={this.state.terminal}
                onChange={this.handleChange}
              />
            </FormControl>
          </form>
        </div>
      </div>
    );
  }
}

export default TerminalPrompt;
