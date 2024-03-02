import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { CircularProgress, Grid, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
// import './styles.css'; // Import the CSS file where you define the background image

const StarWarsPlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets/');
  }, []);
  
  const fetchPlanets = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching planets:', error);
      setIsLoading(false);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      fetchPlanets(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      fetchPlanets(prevPage);
    }
  };

  return (
   <div style={{ 
    backgroundImage: `url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    minHeight: '100vh', 
    position: 'relative', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundAttachment: 'fixed', 
  }}>
      <div>
        <Typography variant="h2" align="center" color={'white'} marginBottom={"20px"}><b><u>Star Wars Planets</u></b></Typography>
      </div>
      {isLoading ? <>
        <CircularProgress/>
      </>:
      <div>
      {planets.map((planet, index) => (
        <div key={index}  >
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={4}>
            <Paper 
                  style={{
                    textAlign: 'center', 
                    marginBottom: '20px', 
                    marginTop: "50px",

                    border: '2px solid white',
                    backgroundImage: 'linear-gradient(45deg, #6C3483, #F4D03F)',
                    padding: '10px',
                    boxShadow: '0px 0px 30px 10px #ffffff',
               
                  }}
                >
             <Typography marginTop={"10px"} marginBottom={"20px"} variant='h5' fontWeight="bold" color="white" sx={{ textTransform: 'uppercase' }}>{planet.name}</Typography>
              </Paper>
                <Divider/> 

                <Paper 
                  style={{
                    textAlign: 'left', 
                    marginBottom: '20px', 
                    position: 'relative',
                  
                    backgroundImage: 'linear-gradient(180deg, #2874A6,#E8F8F5 , #FEF9E7 70%, #F9E79F)',
                    padding: '20px',
                    boxShadow: '0px 0px 10px 5px #ffffff',
                  }}
                >
  <Grid container spacing={3}>
    <Grid item xs={6} sm={6}>
      <Typography style={{ textAlign: 'left', marginLeft:'50px'}}><b>Orbital Period:</b></Typography>
    </Grid>
    
    <Grid item xs={6} sm={6}>
      <Typography style={{ textAlign: 'right', marginRight:"50px" }}>{planet.orbital_period}</Typography>
    </Grid>

    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'left', marginLeft:'50px' }}><b>Diameter:</b></Typography>
    </Grid>
    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'right', marginRight:"50px" }}>{planet.diameter}</Typography>
    </Grid>

    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'left', marginLeft:'50px' }}><b>Climate:</b></Typography>
    </Grid>
    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'right', marginRight:"50px" }}>{planet.climate}</Typography>
    </Grid>

    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'left', marginLeft:'50px' }}><b>Gravity:</b></Typography>
    </Grid>
    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'right', marginRight:"50px" }}>{planet.gravity}</Typography>
    </Grid>

    <Grid item xs={6} sm={6}>
        <Typography style={{ textAlign: 'left', marginLeft:'50px' }}><b>Terrain:</b></Typography>
    </Grid>
    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'right', marginRight:"50px" }}>{planet.terrain}</Typography>
    </Grid>

    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'left' , marginLeft:'50px'}}><b>Surface Water:</b></Typography>
    </Grid>
    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'right', marginRight:"50px" }}>{planet.surface_water}</Typography>
    </Grid>

    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'left' , marginLeft:'50px'}}><b>Population:</b></Typography>
    </Grid>
    <Grid item xs={6} sm={6}>
    <Typography style={{ textAlign: 'right', marginRight:"50px" }}>{planet.population}</Typography>
    </Grid>
  </Grid>
</Paper>
              
            </Grid>
          </Grid>
        </div>
      ))}
      </div>}
    
      <div style={{
    position: 'fixed',
    bottom: '20px', 
    left: '50%', 
    transform: 'translateX(-50%)', 
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 100px', 
    boxSizing: 'border-box', 
    width: '100%',
    zIndex: 999, 
    marginBottom: '250px', 
}}>
    <Button variant='contained' onClick={handlePrevPage} style={{ width: '100px', height: '100px', background: "#3498DB" }}>
        Previous Page
    </Button>
    <Button variant='contained' onClick={handleNextPage} style={{ width: '100px', height: '100px', background: "#3498DB"  }}>
        Next Page
    </Button>
</div>


    </div>
  );
}

export default StarWarsPlanets;
