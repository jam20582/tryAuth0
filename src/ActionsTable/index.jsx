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

    //const getClients = () => {
    const promise1 =   fetch("https://dev--w257x4m.us.auth0.com/api/v2/clients?fields=client_id%2Cname", requestOptions)
        .then(response => response.json())
        .then(result => result.map(client => ({id: client.client_id, name:client.name})))
        .then(clients => setArrClients(clients))
        .catch(error => console.log('error', error));
    //}
    
    //const getActions = () => {
      const promise2 = fetch("https://dev--w257x4m.us.auth0.com/api/v2/actions/actions", requestOptions)
          .then(response => response.json())
          .then(result => setArrActions(result.actions.map(action => ({id: action.id, name: action.name, code: action.code, triggers: action.supported_triggers.map(trigger => trigger.id)}))))
          .catch(error => console.log('error', error));
      //}

    const promise3 = () => {
      const userID = user.sub;
      return fetch(`https://dev--w257x4m.us.auth0.com/api/v2/users/${userID}/roles`, requestOptions)
          .then(response => response.json())
          .then(response => response.map(role => role.name))
          .then(roles => setUserRole(roles))
          .catch(error => console.log('error', error));
    }
    
      // esta manera no es la mas optima para ver las acciones que se aplican para todas las aplicaciones porque solo estamos suponiendo que si no hay match es porque se aplica a todas.

      // const getMatch = () => {
      //   arrClients.map(client => { 
      //     arrActions.map(action => { 
      //       if (action.code.search(client.id) !== -1 || action.code.search(client.name) !== -1) {
      //         setArrActionsByClient(prev => [...prev, 
      //           {client: client.name,
      //           action: action.name}
      //         ])
      //         console.log(action.name, client.name)
      //       } else {
      //         setArrActionsAllClients(prev => [...prev,
      //           {client: client.name,
      //           action: action.name}
      //         ])
      //       }
      //     })
      //   })
      // }

      //Logro buscar las acciones que se pueden realizar por cada cliente
      const getMatch = () => {
        const arrFinal = arrActions.map((action) => {
          let client =
            arrClients.filter((client) => action.code.search(client.id) !== -1 || action.code.search(client.name) !== -1)
              return {
                action: action.name, 
                cliente: client.length > 0 ? client[0].name : "Todas las aplicaciones"
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
        // getClients();
        // getActions();
        // getUserRole();
        if (loading) {
          Promise.all([promise1, promise2, promise3()])
            .then(() => {
              setLoading(false);
            })
        }
      }, [])
  return (
    <>
    {/* <button onClick={getClients}>TRAER APLICACIONES</button>
    <div>{arrClients.map(name => <div key={name}>{name}</div>)}</div>
    <button onClick={getActions}>TRAER ACCIONES</button>
    <div>{arrActions.map(action => <div key={action.id}>{action.name}</div>)}</div> */}
    <button onClick={getMatch}>TRAER APLICACIONES Y ACCIONES</button>
    <div>{arrActionsByClient.map(action => <div key={action.action}>Aplicacion: {action.cliente} - Accion: {action.action}</div>)}</div>
    {userRole.includes("Manager") ? <button onClick={showTriggers}>TRIGGERS</button> : null}
    <div>{triggers.map(trigger => <div key={trigger.action}>Accion: {trigger.action} - Trigger: {trigger.triggers}</div>)}</div>
    {/* <div>{arrActionsByClient.map(action => <div key={action.client}>{action.client} - {action.action}</div>)}</div>
    <div>{arrActionsAllClients.map(action => <div key={action.client}>{action.client} - {action.action}</div>)}</div> */}
    </>
  )
}
