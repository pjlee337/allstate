import React from 'react';
import { Route, Routes } from "react-router-dom"
import Selector from './Selector.js';
import Configurator from './Configurator.js';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
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
      <Routes>
        <Route path="/" element={<Selector />} />
        <Route path="/config" element={<Configurator />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
