// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faIndustry, faTerminal, faScroll, faBars, faBug, faKey, faServer, faRadiation, faHeadphones, faTable, faDragon } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import BugReport from '@mui/icons-material/BugReport';
import Policy from '@mui/icons-material/Policy';
import Token from '@mui/icons-material/Token';
import Security from '@mui/icons-material/Security';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PrivacyTip from '@mui/icons-material/PrivacyTip';
import ViewList from '@mui/icons-material/ViewList';


import './Home.css';
import logo from '/assets/logo.png';


class ToolBar extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  render() {
    return (
      <div className="navtoolbar">
        <Drawer className="toolbar"
          sx={{
            flexShrink: 0,
            color: 'white',
            '& .MuiDrawer-paper': {
              width: "65px",
              boxSizing: 'border-box',
              backgroundColor: '#222',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List >
            <ListItem button>
              <ListItemIcon>
                <ViewList sx={{color:'white', fontSize: 32}} />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BugReport sx={{color:'white', fontSize: 32}} />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Token sx={{color:'white', fontSize: 32}} />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Security sx={{color:'white', fontSize: 32}} />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{color:'white'}}>
                <Policy sx={{color:'white', fontSize: 32}} />
              </ListItemIcon>
            </ListItem>
          </List>
          <Divider />
          <div className="bottom">
            <List >
              <ListItem button>
                <ListItemIcon sx={{color:'white'}}>
                  <PrivacyTip sx={{color:'white', fontSize: 32}} />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon sx={{color:'white'}}>
                  <Settings sx={{color:'white', fontSize: 32}} />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon sx={{color:'white'}}>
                  <Logout sx={{color:'white', fontSize: 32}} />
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default ToolBar;
