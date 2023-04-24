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

import { getHosts, addHost, getVendors } from '../../actions/api/db.js';

import '../Home.css';

const vendors = [
  {
      "vendor_name": "\\$0.99_kindle_books_project",
      "product": null
  },
  {
      "vendor_name": "-",
      "product": null
  },
  {
      "vendor_name": ".bbsoftware",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          }
      ]
  },
  {
      "vendor_name": ".joomclan",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          }
      ]
  },
  {
      "vendor_name": ".matteoiammarrone",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          }
      ]
  },
  {
      "vendor_name": "\\@mail",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          },
          {
              "product_name": "iamma_simple_gallery"
          }
      ]
  },
  {
      "vendor_name": "\\@thi.ng\\/egf_project",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          },
          {
              "product_name": "iamma_simple_gallery"
          }
      ]
  },
  {
      "vendor_name": "\\[gwa\\]_autoresponder_project",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          },
          {
              "product_name": "iamma_simple_gallery"
          }
      ]
  },
  {
      "vendor_name": "_akindo_sushiro_co_ltd",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          },
          {
              "product_name": "iamma_simple_gallery"
          }
      ]
  },
  {
      "vendor_name": "_wp_favorite_posts_project",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          },
          {
              "product_name": "iamma_simple_gallery"
          },
          {
              "product_name": "sushiro"
          }
      ]
  },
  {
      "vendor_name": "0verkill",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          },
          {
              "product_name": "iamma_simple_gallery"
          },
          {
              "product_name": "sushiro"
          }
      ]
  },
  {
      "vendor_name": "1-script",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          },
          {
              "product_name": "iamma_simple_gallery"
          },
          {
              "product_name": "sushiro"
          }
      ]
  },
  {
      "vendor_name": "10web",
      "product": [
          {
              "product_name": "wireless_ip_camera_360"
          },
          {
              "product_name": "iamma_simple_gallery"
          },
          {
              "product_name": "sushiro"
          }
      ]
  }
];

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
      vendor: '',
      pversion: '',
      cpe: [],
      vendors: [],
      products: [
        { name: 'Apache' },
      ],
      tags: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVendorChange = this.handleVendorChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.addCPE = this.addCPE.bind(this);
    this.fetchHosts = this.fetchHosts.bind(this);
    this.submitHost = this.submitHost.bind(this);
  }

  fetchHosts() {
    getHosts().then((hosts) => {
      console.log(hosts);
    });
  }

  componentDidMount() {
    getVendors().then((vendors) => {
      console.log(vendors);
      if (vendors) {
        this.setState({ vendors: vendors });
      }
    });
  }

  submitHost() {
    // HOST CREATION FROM STATE DATA
    this.props.disableViews();
    const host = {
      os: this.state.os,
      osversion: this.state.osversion,
      ip: this.state.ip,
      hostname: this.state.hostname,
      cpe: this.state.cpe,
    };
    addHost(host).then((res) => {
      console.log(res);
    });
  }

  handleVendorChange(event, values) {
    //Get products from vendor
    const productList = [];
    console.log(values)
    for (let i = 0; i < this.state.vendors.length; i++) {
      if (this.state.vendors[i].vendor_name === values) {
        if (this.state.vendors[i].product) {
          for (let j = 0; j < this.state.vendors[i].product.length; j++) {
            var product = this.state.vendors[i].product[j].product_name//.replace(/\\/g, '');
            productList.push({
              name: product,
            });
          }
        }
      }
    }
    //Remove escape characters from vendor name
    values = values.replace(/\\/g, '');


    this.setState({
      products: productList,
      vendor: values,
    });
      console.log(this.state.products);
  }
  handleProductChange(event, values) {
    console.log(values)

    this.setState({
      product: values,
    });
      console.log(this.state.product);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  addCPE() {
    const newcpe ="cpe:2.3:a:" + this.state.vendor + ':' + this.state.product + ':' + this.state.pversion + ':*:*:*:*:*:*:*'

    this.setState({
      cpe: [...this.state.cpe, newcpe],
    });
    console.log(newcpe);
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
              New Host Details{' '}
              <Close
                onClick={this.props.toggleNewHost}
                sx={{ color: 'black', fontSize: 20, float: 'right' }}
              />
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
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
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
                  marginTop: '15px',
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
                  marginTop: '15px',
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
              <Chip label="Installed Software" />
            </Divider>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">CPE</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.cpe.map((row, i) => (
                        <TableRow
                          key={i}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell align="left">{row}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1 },
                    marginTop: '15px',
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value={this.state.vendor}
                    options={this.state.vendors.map((option) => option.vendor_name)}
                    sx={{ width: 300 }}
                    onChange={this.handleVendorChange}
                    renderInput={(params) => <TextField
                      {...params}
                      label="Vendor"
                      name="vendor"
                      value={this.state.vendor}
                      id="outlined-name"
                      />}
                  />
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    label="Product"
                    name="product"
                    options={this.state.products.map((option) => option.name)}
                    sx={{ width: 300 }}
                    onChange={this.handleProductChange}
                    renderInput={(params) => <TextField
                      {...params}
                      id="outlined-name"
                      label="Product"
                      name="product"
                      value={this.state.product}
                      />}
                  />
                  <TextField
                    id="outlined-name"
                    label="Software Version"
                    name="pversion"
                    value={this.state.pversion}
                    onChange={this.handleChange}
                  />
                  <Button
                    onClick={this.addCPE}
                    sx={{ width: '50px', height: '50px' }}
                    variant="contained"
                  >
                    <Add sx={{ color: 'white', fontSize: 28 }} />
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={10}></Grid>
              <Grid item xs={2}>
                <div sx={{ float: 'right' }}>
                  <Button onClick={this.submitHost} variant="contained">
                    Add Host
                  </Button>
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
  { title: 'PCI', year: 1993 },
];




export default NewHost;
