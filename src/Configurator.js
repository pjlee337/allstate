import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
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
import { API } from 'aws-amplify';

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
  const [openGreet, setOpen] = React.useState('');
  const [closeGreet, setClose] = React.useState('');

  const [vendorcode, setvendorcode] = React.useState('');
  const [AllowCallbacksWhenOpen, setAllowCallbacksWhenOpen] = React.useState('');
  const [AllowVoicemailAsTask, setAllowVoicemailAsTask] = React.useState('');
  const [AlternatePath, setAlternatePath] = React.useState('');
  const [AlternateRouting, setAlternateRouting] = React.useState('');
  const [BranchLocation, setBranchLocation] = React.useState('');
  const [BranchType, setBranchType] = React.useState('');
  const [CallDirectorModule, setCallDirectorModule] = React.useState('');
  const [ClosedGreeting, setClosedGreeting] = React.useState('');
  const [ClosedModule, setClosedModule] = React.useState('');
  const [DNIS, setDNIS] = React.useState('');
  const [EmergencyGreetingEnabled, setEmergencyGreetingEnabled] = React.useState('');
  const [EmergencyGreetingValue, setEmergencyGreetingValue] = React.useState('');
  const [OpenClosedOverride, setOpenClosedOverride] = React.useState('');
  const [OpenGreeting, setOpenGreeting] = React.useState('');
  const [QueueARN, setQueueARN] = React.useState('');



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
  const updateValues = (event) => {
    console.log('EVENT TARGET LOG' , event.target);
    API.post('apicca7e6a7', '/data', {
      body:{
        'vendorcode' : vendorcode,
        // 'AllowCallbacksWhenOpen': setAllowCallbacksWhenOpen,
        // 'AllowVoicemailAsTask': setAllowVoicemailAsTask,
        // 'AlternatePath': setAlternatePath,
        // 'AlternateRouting': setAlternateRouting,
        // 'BranchLocation': setBranchLocation,
        // 'BranchType': setBranchType,
        // 'CallDirectorModule': setCallDirectorModule,
        // 'ClosedGreeting': setClosedGreeting,
        // 'ClosedModule': setClosedModule,
        // 'DNIS': setDNIS,
        // 'EmergencyGreetingEnabled': setEmergencyGreetingEnabled,
        // 'EmergencyGreetingValue': setEmergencyGreetingValue,
        // 'OpenClosedOverride': setOpenClosedOverride,
        // 'OpenGreeting': setOpenGreeting,
        // 'QueueARN': setQueueARN
      }
    }).then((response) => {
        console.log('RESPONSE' , response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const location = useLocation();
  const { id } = location.state;
  console.log(id);

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
                  {vendorcode}
                </Typography>
              </div>
              <Typography className="ml-15" sx={{ color: 'text.secondary' }}>Vendor Code & Subcode</Typography>
            </div>
        </AccordionSummary>
          <AccordionDetails>
            <div className='update-container'>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 0, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-flexible"
                  label="Vendor Code"
                  multiline
                  maxRows={4}
                  // onChange={(e) => {
                  //   setVendorcode(e.target.value);
                  // }}
                  // value={vendorcode}
                />
              </Box>

              <br />
              <Button size="small" variant="contained" onClick={updateValues} id="vendorcode">Update</Button>

            </div>
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
            <div className='update-container'>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 0, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-flexible"
                  label="Branch Type"
                  multiline
                  maxRows={4}
                />
              </Box>

              <br />
              <Button size="small" variant="contained">Update</Button>

            </div>
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
            <div className='update-container'>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 0, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-flexible"
                  label="DNIS - Connected"
                  multiline
                  maxRows={4}
                />
              </Box>

              <br />
              <Button size="small" variant="contained">Update</Button>

            </div>
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
            <div className='update-container'>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 0, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-flexible"
                  label="Address"
                  multiline
                  maxRows={4}
                />
              </Box>

              <br />
              <Button size="small" variant="contained">Update</Button>

            </div>
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
                      <AntSwitch inputProps={{ 'aria-label': 'ant design' }} onClick={onGreetingClick} />
                    </Stack>
                  </FormGroup>
                </div>
                <Typography className="col-1" sx={{ width: '33%', flexShrink: 0 }}>Open / Close Override</Typography>
              </div>
              <Typography className="ml-15" sx={{ color: 'text.secondary' }}>Greeting</Typography>
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
                      <AntSwitch inputProps={{ 'aria-label': 'ant design' }} onClick={onEmergencyClick} />
                    </Stack>
                  </FormGroup>
                </div>
                <Typography className="col-1" sx={{ width: '33%', flexShrink: 0 }}>On / Off Emergency Greeting</Typography>
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
                  '& > :not(style)': { mb: 3, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-uncontrolled"
                  label="Emergency Greeting"
                  value={closeGreet}
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
