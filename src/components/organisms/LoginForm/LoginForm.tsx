import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from 'react-hook-form-mui';
import { Grid } from '@mui/material';
import Button from '../../atoms/Button/Button';

const LoginForm = () => {
  const defaultValues = { email: '', password: '' };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <TextFieldElement fullWidth name={'email'} label={'Email'} required />
        </Grid>
        <Grid item xs={12}>
          <PasswordElement
            fullWidth
            name={'password'}
            label={'Hasło'}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button label="Zaloguj" />
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default LoginForm;
