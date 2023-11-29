import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteCart, getCart, patchCart, postPayment } from '../Redux/data/action';
import { Image } from '@mui/icons-material';
import theme from '../Theme';
import { Img } from '@chakra-ui/react';
import { Alert, Button, CircularProgress } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const Box=styled(({theme})=>({
//     display:'flex',

//     [theme.breakpoints.down('xl')]:{

//     },
//     [theme.breakpoints.down('lg')]:{

//     },
//     [theme.breakpoints.down('xs')]:{

//     },
//     [theme.breakpoints.down('md')]:{

//     },
// }))

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cartData=useSelector((store)=>store.data.getCart)
  const loading=useSelector((store)=>store.data.isLoading)
  const error=useSelector((store)=>store.data.isError)
  const dispatch=useDispatch()

  const dataId=uuidv4()

  console.log("cartData",cartData)

  useEffect(()=>{
    dispatch(getCart())
  },[])

  const handleAdd=(quant,id)=>{
    let data={
        quant:quant+1
    }
    dispatch(patchCart(data,id))
  }

  const handleReduce=(quant,id)=>{
    if(quant<2){
        quant=2
    }
    let data={
        quant:quant-1
    }
    dispatch(patchCart(data,id))
   
  }

  const handleRemove=(id)=>{
    dispatch(deleteCart(id))
  }

  const total=cartData.reduce((acc,item,index)=>{
    return acc+item.price*item.quant
  },0)

  const handleOrder=()=>{
    let data={
        item:cartData.map((item)=>{return item.name}),
        price:cartData.map((item)=>{return item.price}),
        qrImage:dataId
    }
    dispatch(postPayment(data))
  }




  return (

    <>

    {cartData.map((item)=>(
        <>
        
{loading&&<CircularProgress/>}
{error&&<Alert severity='error'>Server Error...</Alert>}
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     {item.price}
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
       
      />

<Img src={item.image}/>
   
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <Typography>{item.name}</Typography> <br/>
      <Typography>$ {item.price}/-</Typography> <br/>
      <Typography>Quantity :{item.quant}</Typography> <br/>
      <Button  onClick={()=>handleAdd(item.quant,item.id)}>+</Button>
      <Button onClick={()=>handleReduce(item.quant,item.id)}>-</Button><br/>
      <Button onClick={()=>handleRemove(item.id)}>Remove item</Button>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>



        
        </>
    ))}

    <Typography>Total Amount : {total}</Typography>

    <Button  onClick={handleOrder}>Place Order</Button>
    
    </>
  );
}