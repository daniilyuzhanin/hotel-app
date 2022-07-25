import { Typography } from '@mui/material';

export type InputNameType = {
  value: string,
};

export const InputName = ({ value }: InputNameType) => (
  <Typography variant="subtitle1" sx={{ marginBottom: 3.5 }}>{value}</Typography>
);
