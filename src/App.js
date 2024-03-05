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
      backgroundImage: `url('https://images.pexels.com/photos/12491653/pexels-photo-12491653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
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
        <CircularProgress />
      </> :
        <div>
          <Grid container spacing={2} justifyContent="center">
            {planets.map((planet, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  style={{
                    textAlign: 'center',
                    marginBottom: '5px',
                    border: '2px solid white',
                    backgroundImage: 'linear-gradient(45deg, #09203F, #537895)',
                    padding: '10px',
                    boxShadow: '0px 0px 30px 10px #D6EAF8 ',
                  }}
                >
                  <Typography marginTop={"10px"} marginBottom={"5px"} variant='h5' fontWeight="bold" color="white" sx={{ textTransform: 'uppercase' }}>{planet.name}</Typography>
                </Paper>
                <Divider />
  
                <Paper
                  style={{
                    textAlign: 'left',
                    marginBottom: '20px',
                    position: 'relative',
                    border: '2px solid white',
                    backgroundImage: 'linear-gradient(180deg, #2874A6,#E8F8F5 , #FDEBD0 70%, #73C6B6)',
                    padding: '20px',
                    boxShadow: '0px 0px 5px 2px #ffffff',
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography><b>Orbital Period:</b></Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{planet.orbital_period}</Typography>
                    </Grid>
  
                    <Grid item xs={6}>
                      <Typography><b>Diameter:</b></Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{planet.diameter}</Typography>
                    </Grid>
  
                    <Grid item xs={6}>
                      <Typography><b>Climate:</b></Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{planet.climate}</Typography>
                    </Grid>
  
                    <Grid item xs={6}>
                      <Typography><b>Gravity:</b></Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{planet.gravity}</Typography>
                    </Grid>
  
                    <Grid item xs={6}>
                      <Typography><b>Terrain:</b></Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{planet.terrain}</Typography>
                    </Grid>
  
                    <Grid item xs={6}>
                      <Typography><b>Surface Water:</b></Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{planet.surface_water}</Typography>
                    </Grid>
  
                    <Grid item xs={6}>
                      <Typography><b>Population:</b></Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{planet.population}</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      }
  
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxSizing: 'border-box',
        width: '100%',
        zIndex: 999,
        marginBottom: '20px',
      }}>
        <Button variant='contained' onClick={handlePrevPage} style={{ minWidth: '100px', height: '50px', background: "#3498DB" }}>
          Previous Page
        </Button>
        <Button variant='contained' onClick={handleNextPage} style={{ minWidth: '100px', height: '50px', background: "#3498DB" }}>
          Next Page
        </Button>
      </div>
  
  
    </div>
  );
  
}

export default StarWarsPlanets;
