import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';

export const DatePicker = () => {
  const [value, setValue] = React.useState<Date | null>(
    new Date(),
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField
          {...params}
          fullWidth
          sx={{
            '& input': {
              height: 17,
            },
          }}
        />}
      />
    </LocalizationProvider>
  );
};
