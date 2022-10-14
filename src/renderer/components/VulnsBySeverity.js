// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { createMuiTheme } from 'material-ui/styles';


import './Home.css';

class VulnsBySeverity extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  render() {
    return (
      <div className="dashbox">
        <Card sx={{ minWidth: 275 }} className="">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Vulnerabilities by Severity
              <hr></hr>
            </Typography>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              Critical
              <div className="right">
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "black"
                    }
                  }}
                  badgeContent={5}
                  color="primary"
                  variant="standard">
                </Badge>
              </div>
            </Typography>
            <hr></hr>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              High
              <div className="right">
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#b90000"
                    }
                  }}
                  badgeContent={23}
                  color="primary"
                  variant="standard">
                </Badge>
              </div>
            </Typography>
            <hr></hr>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              Medium
              <div className="right">
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#c8c820"
                    }
                  }}
                  badgeContent={104}
                  color="primary"
                  variant="standard">
                </Badge>
              </div>
            </Typography>
            <hr></hr>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              Low
              <div className="right">
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "green"
                    }
                  }}
                  badgeContent={179}
                  color="primary"
                  variant="standard">
                </Badge>
              </div>
            </Typography>
            <hr></hr>
            <Typography sx={{ paddingLeft: '12px' }} variant="h7" component="div">
              Informational
              <div className="right">
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#4ba5fd"
                    }
                  }}
                  badgeContent={17}
                  color="primary"
                  variant="standard">
                </Badge>
              </div>
            </Typography>
            <hr></hr>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default VulnsBySeverity;
