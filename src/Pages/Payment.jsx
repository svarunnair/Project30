import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Store } from '@mui/icons-material';
import { useEffect } from 'react';
import { getPayment } from '../Redux/data/action';
import { Img } from '@chakra-ui/react';
import QRCode from "react-qr-code";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '1px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Payment() {

  const paymentData=useSelector((Store)=>Store.data.getPayment)
  const dispatch=useDispatch()

  console.log("payment",paymentData)

  useEffect(()=>{
    dispatch(getPayment())

  },[])


  

  

  


  return (



    <>

    {paymentData?.map((item)=>(

      <>
      
      <Card sx={{width:"170px", minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="h6" component="div">
        Name:{item.item}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: ${item.price}/-
        </Typography><br/> Scan the QR Code :
        <Typography variant="body2">
         
          <br />
         
          <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "25%", width: "25%" }}
    value={item.qrImage}
    viewBox={`0 0 256 256`}
  />

        </Typography>
      </CardContent>
      <CardActions>

        
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
      
      
      </>
    ))}
    

    </>
  );
}