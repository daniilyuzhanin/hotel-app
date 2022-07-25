import { Grid, Button } from '@mui/material';

import { HotelCard } from '../HotelCard';

export const Favorites = () => (
  <Grid
    sx={{
      width: 360,
      height: 471,
      padding: 16,
      borderRadius: 4,
      background: 'white',
    }}
  >
    <Grid item>Favorites</Grid>
    <Grid container direction="row">
      <Button>Рейтинг</Button>
      <Button>Цена</Button>
    </Grid>
    <Grid container>
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </Grid>
  </Grid>
);
