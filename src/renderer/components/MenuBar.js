// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faIndustry, faTerminal, faScroll, faBars, faBug, faKey, faServer, faRadiation, faHeadphones, faTable, faDragon } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


import './Home.css';
import logo from '/assets/logo.png';



class MenuBar extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  render() {
    return (
      <div className="menucontainer">
        <div className="loader"></div>
        <ReactTooltip place="bottom" type="info" effect="solid"/>

        <div className="menugroup">
          <div className="logoitem">
            <img className="logo" src={logo} />
          </div>
          <div className="menuitem">
            <FontAwesomeIcon icon={faDragon} />
          </div>
          <div className="menuitem">
            <FontAwesomeIcon data-tip="Table View" onClick={this.props.toggleTableView} icon={faTable} />
          </div>
          <div className="menuitem">
            <FontAwesomeIcon data-tip="Console View" onClick={this.props.toggleTableView} icon={faTerminal} />
          </div>
        </div>

        <div className="menugroupr">
          <div className="menuitemr">
            <Avatar sx={{ bgcolor: "red" }}>M</Avatar>
          </div>
          <div className="menuitemr">
            <Button variant="contained">New Scan</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBar;
