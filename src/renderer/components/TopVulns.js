// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, Label } from 'recharts';

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
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>

      </PieChart>
    );
  }
}

export default TopVulns;
