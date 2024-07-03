// src/App.tsx
import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import router from './router'; // Adjust import path as needed

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider'; // Adjust import path as needed
import { UserProvider } from './content/applications/create-user/UserContext';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
        <UserProvider>
          {content}
          </UserProvider>
        </Suspense>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
