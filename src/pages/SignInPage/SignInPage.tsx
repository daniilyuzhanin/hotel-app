import { Grid } from '@mui/material';
import { SignInForm } from 'common/components/SignInForm';

export const SignInPage = () => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    sx={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      zIndex: 1,

      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        background: `url(${'/background.png'}) center center/cover no-repeat`,
        filter: 'blur(5px)',
        zIndex: 2,
      },

      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        background: 'white',
        opacity: '0.7',
        zIndex: 3,
      },
    }}
  >
    <SignInForm />
  </Grid>
);
