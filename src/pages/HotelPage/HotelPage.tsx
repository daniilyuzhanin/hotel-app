import { Grid } from '@mui/material';
import { Favorites } from 'common/components/Favorites';
import { Header } from 'common/components/Header';
import { SelectionMenu } from 'common/components/SelectionMenu';

export const HotelPage = () => (
  <Grid
    container
    direction="column"
    // alignItems="center"
    sx={{
      width: '100vw',
      // height: '100vh',
      background: '#E5E5E5',
    }}
  >

    <Header />

    <Grid container justifyContent="center">
      <Grid
        container
        direction="column"
        mr={12}
        sx={{ maxWidth: 360 }}
      >

        <SelectionMenu />

        <Grid item>
          <Favorites />
        </Grid>

      </Grid>

      <Grid item sx={{ width: 664 }}>Other information about hotel</Grid>
    </Grid>

  </Grid>
);
