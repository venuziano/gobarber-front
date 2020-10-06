import React from 'react';

import SingIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    {/* <SignUp /> */}
    <SingIn />
    <GlobalStyle />
  </>
);

export default App;
