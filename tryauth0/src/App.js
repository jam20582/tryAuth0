import './App.css';
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0} from '@auth0/auth0-react';

function App() {
  return (
    <div className="App">
      {}
      <LoginButton />
      <LogoutButton />

    </div>
  );
}

export default App;
