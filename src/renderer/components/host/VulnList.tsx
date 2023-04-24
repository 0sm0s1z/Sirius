// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddBox from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';

import { createMuiTheme } from 'material-ui/styles';

import '../Home.css';

function createData(
  cve: string,
  catagory: string,
  tags: string,
  cvss: int,
  srs: int,
  description: string
) {
  return {
    cve,
    catagory,
    tags,
    cvss,
    srs,
    description,
  };
}

const imp17 = '3,3,3';

const rows = [
  createData(
    'CVE-2017-0145 - Remote Code Execution',
    'RCE',
    'CISA Worm RCE Wild',
    9.8,
    10,
    'this.props.vulnerabilityList[0].description',
    imp17
  ),
  createData(
    'CVE-2021-38647 - Microsoft Azure Open Management Infrastructure (OMI) Remote Code Execution Vulnerability',
    237,
    9.0,
    37,
    4.3,
    4.99
  ),
  createData(
    'CVE-2020-8196 - Application Delivery Controller (ADC), Gateway, and SDWAN WANOP',
    262,
    16.0,
    24,
    6.0,
    3.79
  ),
  createData(
    'CVE-2021-34473 - Microsoft Exchange Server Remote Code Execution Vulnerability',
    305,
    3.7,
    67,
    4.3,
    2.5
  ),
];

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.CVEDataMeta.ID}
        </TableCell>
        <TableCell align="right">{row.CVSSV3.baseSeverity}</TableCell>
        <TableCell align="right">{row.Tags}</TableCell>
        <TableCell align="right">{row.CVSSV3.baseScore}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Vulnerablity Summary
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                {row.Description.description_data[0].value}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Impact
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Confidentiality Impact</TableCell>
                      <TableCell>Integrity Impact</TableCell>
                      <TableCell>Availability Impact</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>High</TableCell>
                      <TableCell>High</TableCell>
                      <TableCell>High</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                References
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                {row.References[0]}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

class VulnList extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    this.props.vulnerabilityList.map((row) => console.log(row.CVEDataMeta.ID));

    this.state = {
      open: false,
      setOpen: false,
    };
  }

  render() {
    return (
      <div className="rightcard">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Vulnerability</TableCell>
                <TableCell align="right">Severity</TableCell>
                <TableCell align="right">Tags</TableCell>
                <TableCell align="right">CVSS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.vulnerabilityList.map((row) => (
                <Row key={row} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default VulnList;
