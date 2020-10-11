import React from 'react';

import SingIn from './pages/SignIn/index';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SingIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
