// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, Label } from 'recharts';

class VulnPieGraph extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  render() {
    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 100 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 500 },
    ];
    const COLORS = ['#0088FE', 'red', '#FFBB28', '#FF8042'];

    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={200}
          cy={180}
          innerRadius={120}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
        <Label fill="white" value="Vulnerabities by Severity" offset={0} position="center" />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

export default VulnPieGraph;
