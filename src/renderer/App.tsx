import React, { Component } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

import './App.css';

import Dashboard from './containers/Dashboard';
import Hosts from './containers/Hosts';
import Agents from './containers/Agents';

import MenuBar from './components/MenuBar';
import ToolBar from './components/ToolBar';


class Main extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
       dashboard: true,
       hosts: false,
       agents: false,
    };
    this.disableViews = this.disableViews.bind(this)
    this.toggleDashView = this.toggleDashView.bind(this)
    this.toggleHostsView = this.toggleHostsView.bind(this)
    this.toggleAgentsView = this.toggleAgentsView.bind(this)

  }

  disableViews() {
    this.setState({
      dashboard: false,
      hosts: false,
      agents: false
    });
  }

  toggleDashView() {
    this.disableViews()
    this.setState({
      dashboard: true
    });
  }
  toggleHostsView() {
    this.disableViews()
    this.setState({
      hosts: true
    });
  }
  toggleAgentsView() {
    this.disableViews()
    this.setState({
      agents: true
    });
  }


  render() {
    return (
      <div>
        <ToolBar />
        <MenuBar
          toggleDashView={this.toggleDashView}
          toggleHostsView={this.toggleHostsView}
          toggleAgentsView={this.toggleAgentsView}
        />
        { this.state.dashboard ? <Dashboard sessions={this.props.data} /> : null }
        { this.state.hosts ? <Hosts sessions={this.props.data} /> : null }
        { this.state.agents ? <Agents sessions={this.props.data} /> : null }
      </div>
    );
  }
}

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
