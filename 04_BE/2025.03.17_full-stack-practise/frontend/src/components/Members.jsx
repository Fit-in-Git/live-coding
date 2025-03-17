import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import Navigation from './Navigation';
import { payInApi, chargeOffApi, getUserApi } from './api';

const getDate = ()=>{
  const date = new Date();
  const locale = date.toLocaleString("de-DE");
  return locale
}

const handleTransactions = (state, action) => {
  switch (action.type) {
    case "getData":
      return {amount:action.payload.balance, transactions:action.payload.transactions}
    case "updateAmount":
      return {amount: action.payload.balance, transactions:[{transaction:action.payload.transaction, value:action.payload.amount, date:getDate()}, ...state.transactions]}
    case "payIn": 
    if (action.payload === "" || isNaN(action.payload)) return state;
    return {amount: +state.amount + +action.payload, transactions: [{transaction:"Einzahlung", value:action.payload, date:getDate()}, ...state.transactions]}
    case "chargeOff": 
    if (+state.amount - +action.payload < 0 || action.payload === "" || isNaN(action.payload)) return state;
    return {amount: +state.amount - +action.payload, transactions: [{transaction:"Abbuchung", value:action.payload, date:getDate()}, ...state.transactions]}
    default:
      break;
  }
}

export default function Members() {
  const [state, dispatch] = useReducer(handleTransactions, {amount:1000, transactions:[]})
  const [payIn, setPayIn] = useState("");
  const [chargeOff, setChargeOff] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(()=>{
    (async()=>{
      const response = await getUserApi();
      dispatch({type:"getData", payload:{balance:response.balance, transactions:response.transactions}})
    })();
  },[])

  const handlePayIn = async () => {
    try {
      const transaction = {transaction:"Einzahlung", value:payIn, date:getDate()};
      const response = await payInApi(state.amount + +payIn, [transaction, ...state.transactions]);
      console.log({response});
      updateBalance(payIn, "Einzahlung");
    } catch (error) {
      console.log(error);
    }
  }

  const handleChargeOff = async () => {
    try {
      const transaction = {transaction:"Abbuchung", value:chargeOff, date:getDate()};
      const response = await chargeOffApi(state.amount - +chargeOff,  [transaction, ...state.transactions]);
      console.log({response});
      updateBalance(chargeOff, "Abbuchung");
    } catch (error) {
      console.log(error);
    }
  }

  const updateBalance = async (amount, transaction) => {
    try {
      const response = await getUserApi();
      console.log("Neuer Kontostand", response);
      dispatch({type:"updateAmount", payload:{balance:response.balance, amount, transaction}})
    } catch (error) {
      console.log(error);
    }
  }

  console.log(state);

  return (
   <div className="contentWrapper">
      <Navigation loggedIn={loggedIn} />
       <div className='membersWrapper'>
        <h1>Kontostand: {state.amount} EUR</h1>
        <div className="revenueWrapper">
          <h3>Umsätze</h3>
          <ul>
            {state.transactions.map((obj, index)=>(
              <li key={index}><span>{obj.transaction}: {obj.value} €</span><span>{obj.date}</span></li>
            ))}
          </ul>
        </div>
        <div className="transactionWrapper">
          <div className="payIn">
            <h3>Einzahlen</h3>
            <label>Betrag eingeben
              <input type="text" value={payIn} onChange={(evt)=>setPayIn(evt.target.value)} />
            </label>
              <button onClick={()=>handlePayIn()}>Bestätigen</button>
          </div>
          <div className="chargeOff">
            <h3>Abbuchen</h3>
            <label>Betrag eingeben
              <input type="text" value={chargeOff} onChange={(evt)=>setChargeOff(evt.target.value)}/>
            </label>
              <button onClick={()=>{handleChargeOff()}}>Bestätigen</button>
          </div>
        </div>
       </div>
   </div>
  )
}
