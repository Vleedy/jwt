import { ReactElement } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { authSelector } from '../redux/slices/authorizationSlice';

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const location = useLocation();
  const { isAuth } = useAppSelector(authSelector);

  if (!isAuth) {
    return <Navigate to="/authorization" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
