// @flow
import React, { useRef, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';

import './Agent.css';



class TerminalCanvas extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false,

    };

  }
  decodeB64(str) {
    let base64ToString = ""
    try {
      base64ToString = atob(str)
    } catch(e) {
      console.log(e)
    }

    if (base64ToString != "") {
      return (
        <pre className="commandoutput">
          {base64ToString}
        </pre>
        )
    }
  }
  encodeB64(str) {
    let base64ToString = ""
    try {
      base64ToString = atob(str)
    } catch(e) {
      console.log(e)
    }

    if (base64ToString != "") {
      return (
        <span>
          {base64ToString}
        </span>
      )
    }
  }

  render() {
    const results = [];
    var i = 0
    this.props.terminalHistory?.forEach(command => {
      if (i > 0) {
        results.push (
          <div className ="terminalblock" key={command.id}>

            ({command.IP}){'>'} {this.encodeB64(command.Command)}
            <hr />
            {this.decodeB64(command.Result)}
          </div>
        );
      }
      i++
    })
    return (
      <div className="terminalcanvas">
        {results}
        <AlwaysScrollToBottom terminalHistory={this.props.terminalHistory} />


      </div>
    );
  }
}
const AlwaysScrollToBottom = (term) => {
  const bottomRef = useRef(null);
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'});
  }, [term]);
  return <div ref={bottomRef} />;
};

export default TerminalCanvas;
