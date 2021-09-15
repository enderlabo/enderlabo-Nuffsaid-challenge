import React from 'react';
import { HomePage } from './pages/HomePage';
import { SnackbarProvider } from 'notistack';

const App: React.FC<{}> = () => {

  return (
      <SnackbarProvider
        maxSnack={6}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <>
          <HomePage />
        </>
      </SnackbarProvider>
  );
}

export default App;
