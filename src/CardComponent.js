import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import hands from './hands.svg';
import Button from '@mui/material/Button';

const CardComponent = (megashop) => {
    console.log(megashop);

    return (
    <Card sx={{ minWidth: 275 }} className="Megashop">
        <CardContent>
            <img src={hands} className="Hands-logo" alt="hands" />
            <Typography variant="h5" component="div">
            <br />
            {megashop.vendorcode}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Dataset
            </Typography>
            <Typography variant="body2">
            Select this option to
            <br />
            configure your parameters
            <br />
            for your Megashop
            </Typography>
        </CardContent>
        <CardActions className="Centered">
            <Link to="/config" state={{ incomingVendorcode: megashop.vendorcode, incomingMegashop: megashop }}><Button size="small">Select</Button></Link>
        </CardActions>
    </Card>
    )
}

export default CardComponent;