import LogoutIcon from '@mui/icons-material/Logout';
import {
  Grid,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Grid
      item
      display="flex"
      textAlign="center"
      justifyContent="space-between"
      direction="row"
      sx={{
        padding: 16,
      }}
    >
      <Grid
        display="flex"
        alignItems="center"
        sx={{
          color: 'primary.main',
          fontWeight: 500,
        }}
      >
        Simple Hotel Check
      </Grid>
      <Button
        onClick={() => navigate('/')}
      >
        <Grid
          item
          sx={{
            paddingRight: 6,
            fontWeight: 400,
          }}
        >
          Выйти
        </Grid>
        <LogoutIcon />
      </Button>
    </Grid>
  );
};
