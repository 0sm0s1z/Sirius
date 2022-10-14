// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class VulnOverTime extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  render() {
    const data = [
      {
        name: '',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: '',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: '',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: '',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: '',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: '',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: '',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: '',
        uv: 1490,
        pv: 2300,
        amt: 1100,
      },
    ];

    return (
      <AreaChart
        width={850}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }
}

export default VulnOverTime;
