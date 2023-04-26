import React from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface LoginUIProps {
  setIsHaveAccount: Function;
}

const LoginUI: React.FC<LoginUIProps> = ({ setIsHaveAccount }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className="authorization__form">
      <AccountCircleIcon fontSize="large" />
      <h2 className="authorization__title">Войдите в аккаунт</h2>
      <button onClick={() => setIsHaveAccount(false)} className="authorization__subtitle">
        Зарегистрироваться
      </button>
      <TextField
        required
        fullWidth
        id="outlined-adornment-email"
        label="Введите email"
        type="email"
        variant="outlined"
      />
      <TextField
        required
        fullWidth
        id="outlined-adornment-password"
        label="Введите пароль"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained">Войти</Button>
    </form>
  );
};

export default LoginUI;
