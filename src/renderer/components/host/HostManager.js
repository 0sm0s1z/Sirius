// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import AddBox from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';



import '../Home.css';

class HostSearch extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      hostList: [{
        "ip": ""
        }],
    };
    //this.fetchHosts = this.fetchHosts.bind(this);
    this.selectHost = this.selectHost.bind(this);
  }

  selectHost(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.props.setSelectedHost(target.innerHTML);
  }

  render() {
    return (
      <div className="leftcard">
        <Card sx={{ minWidth: 275 }} className="">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Host Manager
              <UploadFileRoundedIcon sx={{color:'#687468', fontSize: 24, float: 'right'}} /><IndeterminateCheckBoxIcon sx={{color:'#931717', fontSize: 24, float: 'right'}} /><AddBox onClick={this.props.toggleNewHost}  sx={{color:'#1b6fc2', fontSize: 24, float: 'right'}} />
              <hr></hr>
            </Typography>
            <Stack spacing={3} sx={{ width: 500 }}>
              <Autocomplete
                id="tags-standard"
                options={this.props.hostList}
                getOptionLabel={(option) => option.ip}
                defaultValue="IP Address"
                name="selectedHost"
                onChange={this.selectHost}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Host Search"
                    placeholder="IP Address"
                  />
                )}
              />
            </Stack>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default HostSearch;
