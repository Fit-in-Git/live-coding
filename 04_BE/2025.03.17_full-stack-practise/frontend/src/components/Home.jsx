import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { registerApi, loginApi } from './api';
import { ToastContainer, toast, Zoom } from "react-toastify";

export default function Home() {
   const navigate = useNavigate();
   const [modal, setModal] = useState(false);
   const [register, setRegister] = useState(false);
   const [name, setName] = useState("");
   const [customerId, setCustomerId] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loggedIn, setLoggedIn] = useState(false);

   const registerSuccess = () => toast.success('Registrierung erfolgreich!');
   const registerError = () => toast.error('Registrierung/Anmeldung fehlgeschlagen!');

   const handleSubmit = async (evt)=>{
      try {
         evt.preventDefault();
         const data = {name, customerId, email, password};
         console.log(data);
         setRegister(false);
         setName("");
         setCustomerId("");
         setEmail("");
         setPassword("");
         if (!register){
            const user = await loginApi(data);
            if (user) {
               setModal(false);
               localStorage.setItem("loggedIn", "true");
               navigate("/members");
               return;
            }
            return;
         }
         await registerApi(data);
         registerSuccess();
         setModal(false);
      } catch (error) {
         registerError();
         console.log(error);
      }
   }

  return (
   <div className="contentWrapper">
      <Navigation setModal={setModal} loggedIn={loggedIn} />
      <div className="teaser">
      <div className="teaser__box">
         <h2>Passgenau finanziert. Mit dem ausgezeichneten DCI Bank BaufinanzFinder.</h2>
         <p>Beste Beratung bei der Baufinanzierung mit dem "Finanzprodukt des Jahres": Mit uns über 300 Baufinanzierer vergleichen und das beste Angebot mit den besten Zinsen sichern. Finden Sie die Immobilienfinanzierung, die zu Ihnen passt! <br/><span>Jetzt beraten lassen.</span></p>
         <button>Mehr erfahren</button>
      </div>
      </div>
      {modal && <div className="modal">
         <form action="">
            <span onClick={()=>setModal(false)}>Schliessen</span>
            <h3>{register ? "Registrieren" : "Melden Sie sich an!"}</h3>
            {register && <><label>Name
               <input type="text" value={name} onChange={(evt)=>setName(evt.target.value)} />
            </label>
            <label>Kundennummer
               <input type="text" value={customerId} onChange={(evt)=>setCustomerId(evt.target.value)} />
            </label></>}
            <label>E-Mail
               <input type="email" value={email} onChange={(evt)=>setEmail(evt.target.value)}/>
            </label>
            <label >Passwort
               <input type="password" value={password} onChange={(evt)=>setPassword(evt.target.value)} />
            </label>
            <button onClick={handleSubmit}>{register ? "Registrieren" : "Anmelden"}</button>
            {register ? <p className='register'><span onClick={()=>setRegister(false)}>Zur Anmeldung</span></p> : <p className='register'>Noch kein Konto? <span onClick={()=>setRegister(true)}>Jetzt registrieren!</span></p>}
            <div className="footerWrapper">
               <span>Sicherheitshinweise</span>
               <span className='divider'></span>
               <span>Anmeldedaten vergessen?</span>
            </div>
         </form>
     </div>}
     <ToastContainer position="top-center"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick={false}
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="colored"
         transition={Zoom}/>
 </div>
  )
}
