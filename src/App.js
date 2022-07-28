import './App.css';
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0} from '@auth0/auth0-react';
import loading from './Images/loading.gif';
import Actions from './Actions/index.js';

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
    
  if (isLoading) {
    return <img src={loading} alt="Loading..." />;
  }

  return (

    <div className="App">
      {isAuthenticated ?
      <div>
        <h1>Welcome {user.name}!</h1>
        <img src={user.picture} alt="profile" />
        <div>
          <Actions />
          <LogoutButton />
        </div>
      </div> : 
      <div>
        <h1>Hi stranger! Please Login to identify yourself</h1>
        <LoginButton />
      </div>}
    </div>
  );
}

export default App;
