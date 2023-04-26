import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Grid,
  ThemeProvider,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { theme } from '../../styles/libs/Themes/Authorization';

interface RegistrationUIProps {
  isHaveAccount: Boolean;
  setIsHaveAccount: Function;
  inputs: [
    {
      id: string;
      type: string;
      label: string;
    }
  ];
  def:
    | { email: string; password: string }
    | { email: string; password: string; name: string; lastname: string };
}

const AuthorizationUI: React.FC<RegistrationUIProps> = ({
  isHaveAccount,
  setIsHaveAccount,
  inputs,
  def,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: def });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Grid sx={{ height: '100vh' }} container justifyContent="center" alignItems="center">
      <Grid item xs={10} sm={4} md={3}>
        <ThemeProvider theme={theme}>
          <form onSubmit={handleSubmit(onSubmit)} className="authorization__form">
            <AccountCircleIcon fontSize="large" />
            <h2 className="authorization__title">
              {isHaveAccount ? 'Войдите в аккаунт' : 'Регистрация'}
            </h2>
            <button
              onClick={() => setIsHaveAccount(!isHaveAccount)}
              className="authorization__subtitle">
              {isHaveAccount ? 'Зарегистрироваться' : 'У меня уже есть аккаунт'}
            </button>
            {inputs.map((item) => (
              <FormControl key={item.id} fullWidth>
                <InputLabel htmlFor={item.id}>{item.label}</InputLabel>
                <Controller
                  name={item.id}
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <OutlinedInput {...field} id={item.id} type={item.type} label={item.label} />
                  )}
                />
                {errors[item.id] && <span>Поле обязательно для заполнения</span>}
              </FormControl>
            ))}

            <FormControl fullWidth>
              <InputLabel htmlFor="password">Введите пароль</InputLabel>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <OutlinedInput
                    {...field}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Введите пароль"
                  />
                )}
              />
            </FormControl>
            <Button type="submit" variant="contained">
              {isHaveAccount ? 'Войти' : 'Подтвердить'}
            </Button>
          </form>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default AuthorizationUI;
