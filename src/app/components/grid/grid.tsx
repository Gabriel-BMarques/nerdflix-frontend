import * as React from 'react';
import Grid from '@mui/material/Grid';
import MovieCard from '@/app/components/card/card';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  return (
    
  <Grid sx={{ flexGrow: 1 }} container spacing={2} >
    <Grid item justifyContent="center" xs={12}>
      <Grid container justifyContent="center" spacing={spacing}  >
        {Object.keys(new Array(20).fill(null)).map(Number).map((value) => (
          <Grid key={value} item  >
            <MovieCard />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
    
  );
}
