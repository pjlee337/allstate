import React, { useEffect, useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { API } from 'aws-amplify';
import aws_exports from './aws-exports';
import CardComponent from './CardComponent.js';

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

  const [megashops, setMegashops] = React.useState([]);

  useEffect(() => {
    const apiName = 'apicca7e6a7';
    const path = '/data/vendorcode';
    const myInit = {
      headers: {} // OPTIONAL
    };
  
    API.get(apiName, path, myInit)
    .then((response) => {
      console.log(response);
      setMegashops(response);
    });
  }, [])


  const renderCards = () => {
    const elements = [];
    
    if (megashops && megashops.length > 0) {
      megashops.forEach(megashop => {
        elements.push(<CardComponent key={megashop.vendorcode} {...megashop }/>)
      });
    }

    return elements;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }} className='App'>
        <Box sx={{ flexGrow: 1 }} className='App-body'>
          {renderCards()}
        </Box>
      </Box>
    </ThemeProvider>


  );
}

export default Selector;
