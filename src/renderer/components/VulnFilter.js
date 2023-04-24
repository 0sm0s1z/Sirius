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

import './Home.css';

class VulnFilter extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  render() {
    return (
      <div className="rightcard">
        <Card sx={{ minWidth: 275 }} className="">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Vulnerablity Manager
              <UploadFileRoundedIcon sx={{color:'#687468', fontSize: 24, float: 'right'}} /><IndeterminateCheckBoxIcon sx={{color:'#931717', fontSize: 24, float: 'right'}} /><AddBox sx={{color:'#1b6fc2', fontSize: 24, float: 'right'}} />
              <hr></hr>
            </Typography>
            <Stack spacing={3} sx={{ width: 500 }}>
              <Autocomplete
                id="tags-standard"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Vulnerability Query"
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

export default VulnFilter;
