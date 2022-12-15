import React from 'react';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

function Configurator() {
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
  const [expanded, setExpanded] = React.useState(false);
  const [openGreet, setOpen] = React.useState('Enter your change');
  const [closeGreet, setClose] = React.useState('Enter your change');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleOpenChange = (event) => {
    setOpen(event.target.value);
  };
  const handleCloseChange = (event) => {
    setClose(event.target.value);
  };
  const [checked, setGreetingChecked, setEmergencyChecked] = useState(false);
  const onGreetingClick = (event) => {
    event.stopPropagation();
    setGreetingChecked(event.target.checked);
  }
  const onEmergencyClick = (event) => {
    event.stopPropagation();
    setEmergencyChecked(event.target.checked);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='Accordion-container'>
        {/* Vender Code and Subcode */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="space-between">
              <div className='col-1'>
                <div className='values'>
                  <Badge color="secondary" variant="dot"></Badge>
                </div>
                <Typography className="col-1" sx={{ width: '33%', flexShrink: 0 }}>
                  VC002A-1
                </Typography>
              </div>
              <Typography className="ml-15" sx={{ color: 'text.secondary' }}>Vendor Code & Subcode</Typography>
            </div>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Branch Type */}
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <div className="space-between">
              <div className='col-1'>
                <div className='values'>
                  <Badge color="secondary" variant="dot"></Badge>
                </div>
                <Typography className="col-1" sx={{ width: '33%', flexShrink: 0 }}>
                  Mega Shop A
                </Typography>
              </div>
              <Typography className="ml-15" sx={{ color: 'text.secondary' }}>Branch Type</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* DNIS - Connected */}
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="space-between">
              <div className='col-1'>
                <div className='values'>
                  <Badge color="secondary" variant="dot"></Badge>
                </div>
                <Typography className="col-1" sx={{ width: '33%', flexShrink: 0 }}>
                  555-555-1212
                </Typography>
              </div>
              <Typography className="ml-15" sx={{ color: 'text.secondary' }}>DNIS - Connected</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Branch Location */}
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <div className="space-between">
              <div className='col-1'>
                <div className='values'>
                  <Badge color="secondary" variant="dot"></Badge>
                </div>
                <Typography className="col-1" sx={{ width: '33%', flexShrink: 0 }}>
                  456 Center Street, Anywhere, MT 59001
                </Typography>
              </div>
              <Typography className="ml-15" sx={{ color: 'text.secondary' }}>Branch Location</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Open Close Override */}
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="space-between">
              <div className='col-1'>
                <div className='values'>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AntSwitch inputProps={{ 'aria-label': 'ant design' }} greetingChecked={checked} onClick={onGreetingClick} />
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <Typography className="ml-15" sx={{ color: 'text.secondary' }}>Open / Close Override</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className='update-button'>
              <Box
                className="space-between"
                component="form"
                sx={{
                  '& > :not(style)': { mb: 3, width: '49%'},
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-name"
                  label="Open Greeting"
                  value={openGreet}
                  onChange={handleOpenChange}
                  multiline
                  rows={4}
                />
                <TextField
                  id="outlined-uncontrolled"
                  label="Close Greeting"
                  value={closeGreet}
                  defaultValue="foo"
                  onChange={handleCloseChange}
                  multiline
                  rows={4}
                />
              </Box>
              <Button size="small" variant="contained">Update</Button>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Emergency Greeting */}
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="space-between">
              <div className='col-1'>
                <div className='values'>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AntSwitch inputProps={{ 'aria-label': 'ant design' }} emergencyChecked={checked} onClick={onEmergencyClick} />
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <Typography className="ml-15" sx={{ color: 'text.secondary' }}>Emergency Greeting</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className='update-button'>
              <Box
                className="space-between"
                component="form"
                sx={{
                  '& > :not(style)': { mb: 3, width: '49%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-uncontrolled"
                  label="Emergency Greeting"
                  value={closeGreet}
                  defaultValue="foo"
                  onChange={handleCloseChange}
                  multiline
                  rows={4}
                />
              </Box>
              <Button size="small" variant="contained">Update</Button>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Alternate Routing */}
        {/* <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="space-between">
              <div className='col-1'>
                <div className='values'>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <Typography className="ml-15" sx={{ color: 'text.secondary' }}>Alternate Routing</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion> */}


      </div>
    </ThemeProvider>


  );
}

export default Configurator;
