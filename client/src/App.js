import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from 'scenes/loginPage';
import HomePage from 'scenes/homePage';
import ProfilePage from 'scenes/profilePage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from 'theme';
import { ThemeProvider } from '@emotion/react';

function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
        
        <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={isAuth ? <HomePage /> : <Navigate to='/' />} />
            <Route path='/profile/:userId' element={isAuth ? <ProfilePage /> : <Navigate to='/' />} />
          </Routes>
          </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}


export default App;
