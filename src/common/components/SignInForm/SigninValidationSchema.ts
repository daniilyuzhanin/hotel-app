import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Oops! You need to type your email here'),
  password: yup
    .string()
    .required('Hey, we need a password here')
    .matches(
      /^[A-Za-z\d]{8,}$/,
      'Erm, Must be at least 8 characters here',
    ),
});
