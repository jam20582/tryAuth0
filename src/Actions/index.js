import {useAuth0} from '@auth0/auth0-react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import myHeaders from './headers';

export default function Actions() {
    const [arrClients, setArrClients] = useState([]);
    const [arrActions, setArrActions] = useState([]);
    const [arrActionsByClient, setArrActionsByClient] = useState([]);
    const [triggers, setTriggers] = useState([]);
    const [userRole, setUserRole] = useState([]);
    const {user} = useAuth0();
    const [loading, setLoading] = useState(true);
    
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    };

    const URL = "https://dev--w257x4m.us.auth0.com/api/v2"

    const getClients = () => {
    fetch(`${URL}/clients?fields=client_id%2Cname`, requestOptions)
        .then(response => response.json())
        .then(result => result.map(client => ({id: client.client_id, name:client.name})))
        .then(clients => setArrClients(clients))
        .catch(error => console.log('error', error));
    }
    
    const getActions = () => {
      fetch(`${URL}/actions/actions`, requestOptions)
          .then(response => response.json())
          .then(result => setArrActions(result.actions.map(action => ({id: action.id, name: action.name, code: action.code, triggers: action.supported_triggers.map(trigger => trigger.id)}))))
          .catch(error => console.log('error', error));
    }

    const getUserRole = () => {
      const userID = user.sub;
      return fetch(`${URL}/users/${userID}/roles`, requestOptions)
          .then(response => response.json())
          .then(response => response.map(role => role.name))
          .then(roles => setUserRole(roles))
          .catch(error => console.log('error', error));
    }
    
    const getMatch = () => {
      const arrFinal = arrActions.map((action) => {
        let client =
          arrClients.filter((client) => action.code.search(client.id) !== -1 || action.code.search(client.name) !== -1)
            return {
              action: action.name, 
              cliente: client.length > 0 ? client[0].name : "Apply to all clients"
            }
      });
      setArrActionsByClient(arrFinal);
    };

    const showTriggers = () => {
      setTriggers(arrActions.map(action => {
        return {
          action: action.name,
          triggers: action.triggers[0]
        }
      }))
    }

    useEffect(() => {
      if (loading) {
        getClients();
        getActions();
        getUserRole();         
        setLoading(false);
      }
    }, [])
  return (
    <>
    <button onClick={getMatch}>Get Clients and Actions</button>
    <div>{arrActionsByClient.map(action => <div key={action.action}>Client: {action.cliente} - Action: {action.action}</div>)}</div>
    {userRole.includes("Manager") ? <button onClick={showTriggers}>Show Triggers</button> : null}
    <div>{triggers.map(trigger => <div key={trigger.action}>Action: {trigger.action} - Trigger: {trigger.triggers}</div>)}</div>
    </>
  )
}
