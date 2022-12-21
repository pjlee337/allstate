import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import hands from './hands.svg';
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { API } from 'aws-amplify';
import aws_exports from './aws-exports';

API.configure(aws_exports);

function Selector() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  const apiName = 'apicca7e6a7';
  const path = '/data/vendorcode';
  const myInit = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  };
  useEffect((response) => {
    API.get(apiName, path, myInit)
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error.response);
      });
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }} className='App'>
        <Box sx={{ flexGrow: 1 }} className='App-body'>
          <Card sx={{ minWidth: 275 }} className="Megashop">
            <CardContent>
              <img src={hands} className="Hands-logo" alt="hands" />
              <Typography variant="h5" component="div">
                <br />
                Megashop
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Dataset 1
              </Typography>
              <Typography variant="body2">
                Select this option to
                <br />
                configure your parameters
                <br />
                for Megashop A
              </Typography>
            </CardContent>
            <CardActions className="Centered">
              <Link to="/config" state={{ vendorcode: [0] }}><Button size="small">Select</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 275 }} className="Megashop">
            <CardContent>
              <img src={hands} className="Hands-logo" alt="hands" />
              <Typography variant="h5" component="div">
                <br />
                Megashop
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Dataset 2
              </Typography>
              <Typography variant="body2">
                Select this option to
                <br />
                configure your parameters
                <br />
                for Megashop B
              </Typography>
            </CardContent>
            <CardActions className="Centered">
              <Link to="/config" state={{ vendorcode: [1] }}><Button size="small">Select</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 275 }} className="Megashop">
            <CardContent>
              <img src={hands} className="Hands-logo" alt="hands" />
              <Typography variant="h5" component="div">
                <br />
                Megashop
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Dataset 3
              </Typography>
              <Typography variant="body2">
                Select this option to
                <br />
                configure your parameters
                <br />
                for Megashop C
              </Typography>
            </CardContent>
            <CardActions className="Centered">
              <Link to="/config" state={{ vendorcode: [2] }}><Button size="small">Select</Button></Link>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>


  );
}

export default Selector;
