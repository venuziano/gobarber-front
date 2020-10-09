import React from 'react';

import SingIn from './pages/SignIn/index';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SingIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
