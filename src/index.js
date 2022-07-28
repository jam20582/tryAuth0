import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev--w257x4m.us.auth0.com' //replace with your Auth0 domain
      clientId='iD6ZzrSOk0U4KHMwIpy0bdSvYWq51XDR' //replace with your Auth0 client id
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
