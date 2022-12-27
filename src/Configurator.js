import React, { useEffect } from 'react';
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

  const location = useLocation();
  const { incomingVendorcode, incomingMegashop } = location.state;
  const [currentMegashop, setCurrentMegashop] = React.useState(incomingMegashop);

  useEffect(() => {
    const apiName = 'apicca7e6a7';
    const path = '/data/vendorcode';
    const myInit = {
      headers: {} // OPTIONAL
    };
  
    API.get(apiName, path, myInit)
    .then((response) => {
      console.log(response);
      const targetMegashop = response.filter((megashop) => {
        return incomingVendorcode === megashop.vendorcode;
      })[0]
      setCurrentMegashop(targetMegashop);
    });
  }, [])

  const [expanded, setExpanded] = React.useState(false);
  // const [openGreet, setOpen] = React.useState('');
  // const [closeGreet, setClose] = React.useState('');
  const [checked, setGreetingChecked, setEmergencyChecked] = useState(false);

  const [vendorcode, setvendorcode] = React.useState(currentMegashop.vendorcode);
  const [AllowCallbacksWhenOpen, setAllowCallbacksWhenOpen] = React.useState(currentMegashop.AllowCallbacksWhenOpen);
  const [AllowVoicemailAsTask, setAllowVoicemailAsTask] = React.useState(currentMegashop.AllowVoicemailAsTask);
  const [AlternatePath, setAlternatePath] = React.useState(currentMegashop.AlternatePath);
  const [AlternateRouting, setAlternateRouting] = React.useState(currentMegashop.AlternateRouting);
  const [BranchLocation, setBranchLocation] = React.useState(currentMegashop.BranchLocation);
  const [BranchType, setBranchType] = React.useState(currentMegashop.BranchType);
  const [CallDirectorModule, setCallDirectorModule] = React.useState(currentMegashop.CallDirectorModule);
  const [ClosedGreeting, setClosedGreeting] = React.useState(currentMegashop.ClosedGreeting);
  const [ClosedModule, setClosedModule] = React.useState(currentMegashop.ClosedModule);
  const [DNIS, setDNIS] = React.useState(currentMegashop.DNIS);
  const [EmergencyGreetingEnabled, setEmergencyGreetingEnabled] = React.useState(currentMegashop.EmergencyGreetingEnabled);
  const [EmergencyGreetingValue, setEmergencyGreetingValue] = React.useState(currentMegashop.EmergencyGreetingValue);
  const [OpenClosedOverride, setOpenClosedOverride] = React.useState(currentMegashop.OpenClosedOverride);
  const [OpenGreeting, setOpenGreeting] = React.useState(currentMegashop.OpenGreeting);
  const [QueueARN, setQueueARN] = React.useState(currentMegashop.QueueARN);



  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onGreetingClick = (event) => {
    console.log('EVENT', event.target.checked);
    event.stopPropagation();
    setOpenClosedOverride(event.target.checked);
  }
  const onEmergencyClick = (event) => {
    event.stopPropagation();
    setEmergencyGreetingEnabled(event.target.checked);
  }
  useEffect(() => {
    updateValues();
  }, [OpenClosedOverride, EmergencyGreetingEnabled])



  const updateValues = () => {
    API.put('apicca7e6a7', '/data/vendorcode', {
      body:{
        'vendorcode' : vendorcode,
        'AllowCallbacksWhenOpen': AllowCallbacksWhenOpen,
        'AllowVoicemailAsTask': AllowVoicemailAsTask,
        'AlternatePath': AlternatePath,
        'AlternateRouting': AlternateRouting,
        'BranchLocation': BranchLocation,
        'BranchType': BranchType,
        'CallDirectorModule': CallDirectorModule,
        'ClosedGreeting': ClosedGreeting,
        'ClosedModule': ClosedModule,
        'DNIS': DNIS,
        'EmergencyGreetingEnabled': EmergencyGreetingEnabled,
        'EmergencyGreetingValue': EmergencyGreetingValue,
        'OpenClosedOverride': OpenClosedOverride,
        'OpenGreeting': OpenGreeting,
        'QueueARN': QueueARN
      }
    }).then((response) => {
        console.log('RESPONSE' , response);
        setCurrentMegashop(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='Accordion-container'>
        {/* Vender Code and Subcode */}
        <Accordion expanded={expanded === 'panel1'}>
          <AccordionSummary
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
                  {BranchType}
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
                  value={BranchType}
                  onChange={(e) => {
                    setBranchType(e.target.value)
                  }}
                />
              </Box>

              <br />
              <Button size="small" variant="contained" onClick={updateValues}>Update</Button>

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
                  {DNIS}
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
                  value={DNIS}
                  onChange={(e) => {
                    setDNIS(e.target.value)
                  }}
                />
              </Box>

              <br />
              <Button size="small" variant="contained" onClick={updateValues}>Update</Button>

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
                  {BranchLocation}
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
                  value={BranchLocation}
                  onChange={(e) => {
                    setBranchLocation(e.target.value)
                  }}
                />
              </Box>

              <br />
              <Button size="small" variant="contained" onClick={updateValues}>Update</Button>

            </div>
          </AccordionDetails>
        </Accordion>

        {/* Open Close Override */}
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <div className="space-between">
              <div className='col-1'>
                <div className='values'>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AntSwitch 
                        defaultChecked={currentMegashop.OpenClosedOverride} 
                        inputProps={{ 'aria-label': 'ant design' }} 
                        onClick={onGreetingClick} 
                      />
                    </Stack>
                  </FormGroup>
                </div>
                <Typography className="col-1" sx={{ width: '33%', flexShrink: 0 }}>
                  Open / Close Override: {OpenClosedOverride ? 'Enabled' : 'Disabled'}
                </Typography>
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
                  multiline
                  rows={4}
                  value={OpenGreeting}
                  onChange={(e) => {
                    setOpenGreeting(e.target.value)
                  }}
                />
                <TextField
                  id="outlined-uncontrolled"
                  label="Close Greeting"
                  multiline
                  rows={4}
                  value={ClosedGreeting}
                  onChange={(e) => {
                    setClosedGreeting(e.target.value)
                  }}
                />
              </Box>
              <Button size="small" variant="contained" onClick={updateValues}>Update</Button>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Emergency Greeting */}
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <div className="space-between">
              <div className='col-1'>
                <div className='values'>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AntSwitch                       
                        defaultChecked={currentMegashop.EmergencyGreetingEnabled} 
                        inputProps={{ 'aria-label': 'ant design' }} 
                        onClick={onEmergencyClick}
                      />
                    </Stack>
                  </FormGroup>
                </div>
                <Typography className="col-1" sx={{ width: '33%', flexShrink: 0 }}>On / Off Emergency Greeting: {EmergencyGreetingEnabled ? 'Enabled' : 'Disabled'}</Typography>
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
                  // onChange={handleCloseChange}
                  multiline
                  rows={4}
                  value={EmergencyGreetingValue}
                  onChange={(e) => {
                    setEmergencyGreetingValue(e.target.value)
                  }}
                />
              </Box>
              <Button size="small" variant="contained" onClick={updateValues}>Update</Button>
            </div>
          </AccordionDetails>
        </Accordion>

      </div>
    </ThemeProvider>


  );
}

export default Configurator;
