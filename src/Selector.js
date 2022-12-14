import React from 'react';
import logo from './logo.svg';
import hands from './hands.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }} className='App'>
        <AppBar position="static">
          <Toolbar>
            <div className='App-logo-container'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={logo} className="App-logo" alt="logo" />
              </Typography>
            </div>
            <div className='login-button-container' >
              <Button color="inherit">Login</Button>
            </div>
          </Toolbar>
        </AppBar>
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
              <Button size="small">Select</Button>
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
              <Button size="small">Select</Button>
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
              <Button size="small">Select</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>


  );
}

export default Selector;
