import { Grid, TextField } from '@mui/material';

import { DatePicker } from './DatePicker/DatePicker';
import { InputName } from './InputName/InputName';
import { SearchButton } from './SearchButton/SearchButton';

export const SelectionMenu = () => (
  <Grid
    container
    direction="column"
    mb={12}
    sx={{
      width: 360,
      height: 410,
      padding: 16,
      borderRadius: 4,
      background: 'white',
    }}
  >
    <Grid item mb={8}>
      <InputName value="Локация" />
      <TextField
        id="outlined-required"
        defaultValue="Москва"
        fullWidth
        sx={{
          '& input': {
            height: 17,
          },
        }}
      />
    </Grid>
    <Grid item mb={8}>
      <InputName value="Дата заселения" />
      <DatePicker />
    </Grid>
    <Grid item mb={16}>
      <InputName value="Количество дней" />
      <TextField
        id="outlined-number"
        type="number"
        defaultValue={1}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        sx={{
          '& input': {
            height: 17,
          },
        }}
      />
    </Grid>
    <SearchButton />
  </Grid>
);
