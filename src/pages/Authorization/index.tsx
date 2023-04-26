import React from 'react';
import { login, registration } from '../../redux/thunks/authorizationThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../../redux/slices/authorizationSlice';
import LoginUI from './LoginUI';
import { Grid, ThemeProvider } from '@mui/material';
import { theme } from '../../styles/libs/Themes/Authorization';
import RegistrationUI from './RegistrationUI';

const Authorization = () => {
  const [isHaveAccount, setIsHaveAccount] = React.useState<Boolean>(true);
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  const { isAuth } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState<string>('ilyas@test.ru');
  const [password, setPassword] = React.useState<string>('12345');

  const loginUser = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };
  const registrationUser = async (email: string, password: string) => {
    dispatch(registration({ email, password }));
  };
  if (isAuth) {
    return <Navigate to={fromPage} />;
  }
  return (
    <Grid sx={{ height: '100vh' }} container justifyContent="center" alignItems="center">
      <Grid item xs={10} sm={4} md={3}>
        <ThemeProvider theme={theme}>
          {isHaveAccount ? (
            <LoginUI setIsHaveAccount={setIsHaveAccount} />
          ) : (
            <RegistrationUI setIsHaveAccount={setIsHaveAccount} />
          )}
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default Authorization;
