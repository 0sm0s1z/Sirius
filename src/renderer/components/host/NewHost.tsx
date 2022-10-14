// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Close from '@mui/icons-material/Close';
import Add from '@mui/icons-material/Add';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import Button from '@mui/material/Button';

import { getHosts, addHost} from '../../actions/api/db.js'

import '../Home.css';



class NewHost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      os: '',
      osversion: '',
      ip: '',
      hostname: '',
      port: null,
      product: '',
      pversion: '',
      services: [{}],
      /*
      services: [{
        'port': 80,
        'product': "apache",
        'version': '2.5.1',
        'cpe': 'cpe:2.3:o:zyxel:zywall_vpn300_firmware:4.35:*:*:*:*:*:*:*'
      }],*/
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addService = this.addService.bind(this);
    this.fetchHosts = this.fetchHosts.bind(this);
    this.submitHost = this.submitHost.bind(this);
  }

  fetchHosts() {
    getHosts()
      .then(hosts => {
        console.log(hosts)
      });
  }
  submitHost() {
    this.props.disableViews()
    const host = {
      os: this.state.os,
      osversion: this.state.osversion,
      ip: this.state.ip,
      hostname: this.state.hostname,
      services: this.state.services,
    }
    addHost(host)
      .then(res => {
        console.log(res)
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addService() {
    const service = {
      'port': this.state.port,
      'product': this.state.product,
      'version': this.state.pversion,
      'cpe': 'cpe:2.3:a:' + this.state.product + ':' + this.state.product + ':' + this.state.pversion + ':*:*:*:*:*:*:*'
    }

    this.setState({
      services: [...this.state.services, service]
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div className="rightcard">
        <Card sx={{ minWidth: 275 }} className="">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              New Host Details <Close onClick={this.props.toggleNewHost}  sx={{color:"black", fontSize: 20, float: 'right'}} />
              <hr></hr>
            </Typography>
            <Stack spacing={3} sx={{ paddingBottom: '15px' }}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={hostTags.map((option) => option.title)}

                defaultValue={[hostTags[2].title]}
                freeSolo
                renderTags={(value: readonly string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    label="Host Tags"
                    placeholder="Host Tags"
                  />
                )}
              />
            </Stack>
            <Divider>
              <Chip label="Host Details" />
            </Divider>
            <Grid container spacing={2}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                  marginTop: '15px'
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-name"
                  label="Hostname"
                  name="hostname"
                  value={this.state.hostname}
                  onChange={this.handleChange}
                />
                <TextField
                  id="outlined-name"
                  label="Operating System"
                  name="os"
                  value={this.state.os}
                  onChange={this.handleChange}
                />
                <TextField
                  id="outlined-name"
                  label="Operating System Version"
                  name="osversion"
                  value={this.state.osversion}
                  onChange={this.handleChange}
                />
              </Box>
            </Grid>

            <Grid container spacing={2}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                  marginTop: '15px'
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-name"
                  label="IP Address"
                  name="ip"
                  value={this.state.ip}
                  onChange={this.handleChange}
                />

              </Box>
            </Grid>

            <Divider>
              <Chip label="Services" />
            </Divider>
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Port</TableCell>
                        <TableCell align="left">Product</TableCell>
                        <TableCell align="left">Version</TableCell>
                        <TableCell align="left">Common Platform Enumeration (CPE)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.services.map((row,i) => (
                        <TableRow
                          key={i}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.port}
                          </TableCell>
                          <TableCell align="left">{row.product}</TableCell>
                          <TableCell align="left">{row.version}</TableCell>
                          <TableCell align="left">{row.cpe}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1 },
                    marginTop: '15px'
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-name"
                    label="Port"
                    name="port"
                    value={this.state.port}
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="outlined-name"
                    label="Product"
                    name="product"
                    value={this.state.product}
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="outlined-name"
                    label="Software Version"
                    name="pversion"
                    value={this.state.pversion}
                    onChange={this.handleChange}
                  />
                  <Button onClick={this.addService} sx={{width: '50px', height: '50px'}} variant="contained"><Add sx={{color:"white", fontSize: 28}} /></Button>
                  <Button sx={{width: '50px', height: '50px'}} variant="contained"><UploadFileRoundedIcon sx={{color:"white", fontSize: 28}} /></Button>
                </Box>
              </Grid>
            </Grid>

            <Divider>
              <Chip label="Software" />
            </Divider>
            <Grid container spacing={2} >
              <Grid item xs={10}>

                <Typography>
                  <i>Coming Soon!</i>
                </Typography>
              </Grid>
            </Grid>


            <Grid container spacing={2} >
              <Grid item xs={10}>

              </Grid>
              <Grid item xs={2}>
                <div sx={{ float: 'right' }}>
                  <Button onClick={this.submitHost} variant="contained">Add Host</Button>
                </div>
              </Grid>
            </Grid>

          </CardContent>
        </Card>
      </div>
    );
  }
}

// Host Tags Get From Host DB Component Mount // Hardcoding for now
const hostTags = [
  { title: 'Compliance Required', year: 1994 },
  { title: 'Critical Asset', year: 1972 },
  { title: 'Windows', year: 1974 },
  { title: 'Linux', year: 2008 },
  { title: 'NERC-SIP', year: 1957 },
  { title: "PCI", year: 1993 },
];

export default NewHost;
