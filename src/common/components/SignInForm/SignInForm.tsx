import {
  Grid,
  Typography,
  Button,
  TextField,
  FormHelperText,
} from '@mui/material';
import { validationSchema } from 'common/components/SignInForm';
import { useFormik } from 'formik';
import { ChangeEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

export type OnSubmitFormTest = {
  onSubmit?: ChangeEventHandler<HTMLButtonElement>;
};

export const SignInForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema,
    onSubmit: (values) => {
      navigate('/productPage');
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values: {
      email: emailValue,
      password: passwordValue,
    },
    touched: { email: isEmailTouched, password: isPasswordTouched },
    errors: { email: emailErrors, password: passwordErrors },
  } = formik;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        width: 410,
        minHeight: 382,
        borderRadius: 8,
        padding: 16,
        background: 'white',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <form
        onSubmit={handleSubmit}
        onBlur={handleBlur}
        onChange={handleChange}
        noValidate
        style={{ width: '100%', height: '100%' }}
      >
        <Typography
          align="center"
          sx={{
            paddingBottom: 16,
            color: 'primary.main',
          }}
          variant="h1"
        >
          Simple Hotel Check
        </Typography>
        <Grid container>
          <FormHelperText
            error={isEmailTouched && Boolean(emailErrors)}
            sx={{
              margin: '0 0 7px',
              fontSize: 16,
              lineHeight: '19px',
              fontWeight: 300,
              color: 'primary.main',
            }}
          >
            Логин
          </FormHelperText>
          <TextField
            size="small"
            fullWidth
            id="signinEmail"
            name="email"
            onBlur={handleBlur}
            value={emailValue}
            error={isEmailTouched && Boolean(emailErrors)}
            helperText={isEmailTouched && emailErrors}
            sx={{
              marginBottom: 12,
              '& input': {
                height: 33,
              },
            }}
          />
          <FormHelperText
            error={isPasswordTouched && Boolean(passwordErrors)}
            sx={{
              margin: '0 0 7px',
              fontSize: 16,
              lineHeight: '19px',
              fontWeight: 300,
              color: 'primary.main',
            }}
          >
            Пароль
          </FormHelperText>
          <TextField
            size="small"
            fullWidth
            id="signinPassword"
            name="password"
            onBlur={handleBlur}
            value={passwordValue}
            error={isPasswordTouched && Boolean(passwordErrors)}
            helperText={isPasswordTouched && passwordErrors}
            sx={{
              marginBottom: 16,
              '& input': {
                height: 33,
              },
            }}
          />
        </Grid>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          id="signinSubmit"
          size="large"
          sx={{
            background: 'linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%)',
            height: 50,
            color: 'primary.light',
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 500,
          }}
        >
          Войти
        </Button>
      </form>
    </Grid>
  );
};
