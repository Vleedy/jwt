import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './hooks/redux';
import { checkAuth } from './redux/thunks/authorizationThunk';
import Layout from './components/layout';
import PrivateRoute from './HOCs/PrivateRoute';
import Home from './pages/Home';
import News from './pages/Home';
import Authorization from './pages/Authorization';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="news" element={<News />} />
      </Route>
      <Route path="/authorization" element={<Authorization />} />
    </Routes>
  );
}

export default App;
