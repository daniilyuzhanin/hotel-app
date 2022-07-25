import { Grid } from '@mui/material';

export const HotelCard = () => (
  <Grid container>

    <Grid container direction="row" justifyContent="space-between">
      <Grid item>Hotel Name</Grid>
      <Grid item>Hearth Icon</Grid>
    </Grid>

    <Grid container direction="row" justifyContent="space-between">
      <Grid item>Date</Grid>
      <Grid item>-</Grid>
      <Grid item>Count days</Grid>
    </Grid>

    <Grid container direction="row" justifyContent="space-between">
      <Grid item>Stars Icon</Grid>
      <Grid container>
        <Grid item>Price:</Grid>
        <Grid item>Sallary</Grid>
      </Grid>
    </Grid>

  </Grid>
);
