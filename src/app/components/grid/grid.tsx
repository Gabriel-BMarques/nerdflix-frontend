import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import MovieCard from '@/app/components/card/card';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item justifyContent="center" xs={12}>
        <Grid container justifyContent="start" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5, 6].map((value) => (
            <Grid key={value} item>
              <MovieCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
