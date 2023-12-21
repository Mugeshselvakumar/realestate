import React, { useState } from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link, useNavigate,BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import ContactDetails from './ContactDetails';


export default function Buy() {
  const [selectedItem, setSelectedItem] = useState('home');
  const navigate = useNavigate();
  
 

  

  const handleSidebarSelect = (item) => {
    setSelectedItem(item);
  };

  const blackTheme = createTheme({
    palette: {
      primary: {
        main: '#000', // Black color
      },
    },
  });

  const handleClick = () => {
    navigate("/login");
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const CustomCard = ({ to, ...card }) => (
    <Card
      component={Link}
      to={to}
      sx={{ backgroundColor: '#f5f5f5', flex: '1 1 23%', margin: '8px', textDecoration: 'none', color: 'inherit' }}
    >
      <CardContent>
        <Typography variant="h4" component="div">
          {card.title}
        </Typography>
        <div>
          <Typography variant="body2" color="text.secondary">
            Address: {card.material}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {card.price}
          </Typography>
        </div>
        <CardMedia component="img" height="140" alt={`Image for ${card.title}`} src={card.imageSrc} />
      </CardContent>
    </Card>
  );  

  const cardData = [
    {
      to: "/common/card1",
      title: "Metro Grand",
      material: "3 BHK house in Kurumbapalayam,coimbatore",
      price: "$80 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXkOOJPSEVnARD_TUsb1jQGxEMnJHXCZixQ&usqp=CAU",
    },
    {
      to: "/common/card2",
      title: "Havisha Villas",
      material: "3 BHK house in Kalapatti,coimbatore",
      price: "$120 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpouO4bgJKGEKXOhhYtn9Vi_ozuRZ_QhiNw&usqp=CAU",
    },
    {
      to: "/common/card3",
      title: "Opal Garden",
      material: "2 BHK house in Kovilpadam,Coimbatore",
      price: "$80 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpINPIDm1Gw3X-qcdjyYPgZV5KL1CseLvEyw&usqp=CAU",
    },
    {
      to: "/common/card4",
      title: "Cinco Fairland",
      material: "4 BHK House in Chettipalayam,coimbatore",
      price: "$100 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7MQfHCUp90pxO5Jn1C5sbctD-meCWCBJUg&usqp=CAU",
    },
    {
      to: "/common/card5",
      title: "Greenfield",
      material: "3 BHK house in Annur,coimbatore",
      price: "$75 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0CQ2vQefUnU-krDNCRZMDUd7ousjCH3Dmg&usqp=CAU",
    },
    {
      to: "/common/card6",
      title: "VIP Garden",
      material: "3 BHK house in kovaipudar,coimbatore",
      price: "$80 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WOt3go_Iieqy_ByIK6appsIvMGGV_fCjng&usqp=CAU",
    },
    {
      to: "/common/card7",
      title: "Coral",
      material: "2 BHK house in Kalapatti,coimbatore",
      price: "$50 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfM6lyXPas87WKqB9b7nvqRgkd3iHm_2d4w&usqp=CAU",
    },
    {
      to: "/common/card8",
      title: "RubyLand",
      material: "2 BHK house in Neelambur,coimbatore",
      price: "$60 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8lnB3lQHZmKmnDYbCOShO9FMMuxur3krZBsNUwuNmWjWzIM14zR-r2DnPwBA4cW4ewo&usqp=CAU",
    },
    {
      to: "/common/card9",
      title: "DRD Garden",
      material: "2 BHK house in Madampatti,coimbatore",
      price: "$80 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3Y2JpxUIAD16nQQVyOODk60J25Lxc6bqBQ&usqp=CAU",
    },
    {
      to: "/common/card10",
      title: "Bliss ",
      material: "3 BHK house in Anaikatti,coimbatore",
      price: "$95 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnuNo4QSQGDmo5tXL7xgorD2wTe4mCuh-Ig&usqp=CAU",
    },
    {
      to: "/common/card11",
      title: "Royal Kalpataru",
      material: "3 BHK house in Ganapathy,coimbatore",
      price: "$80 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBoNRrkpnL1_dLcgyrwjZnj22YlpPonIoCg&usqp=CAU",
    },
    {
      to: "/common/card12",
      title: "Bharati Ashraya",
      material: "2 BHK house in Thudiyalur,coimbatore",
      price: "65 Lac",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUyxmtoTK00Hn7u4vl9aovr-3OPGlmzFtInDWdpeoQOHehK2sV9bNZUSlGrSz9OPz90k&usqp=CAU",
    },
  ];
  
  
  return (
    <>
    
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="fixed" style={{ width: '100%' }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, display: 'flex', justifyContent: 'center' }}
            >
              House For Sale
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <Box sx={{ marginTop: 8, padding: 2 }}>
          <Grid container spacing={2}>
            {cardData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <CustomCard to={`/contact-details/${index}`} {...card} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
     
    </>
  );
}