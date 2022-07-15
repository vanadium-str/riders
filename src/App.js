import { useState } from 'react';
import './App.css';
import AboutEvent from './components/events/AboutEvent';
import FooterAdmin from './components/events/FooterAdmin';
import FooterUser from './components/events/FooterUser';
import PageConstructor from './components/PageConstructor';
import SwitchPage from './components/SwitchPage';
import { ridersAppContext } from './utils/context';

function App() {
  const [page, setPage] = useState('');
  const [pageEvent, setPageEvent] = useState('');
  const [currentBlock, setCurrentBlock] = useState('allTrips');
  const [eventsList, setEventsList] = useState([]);
  const [admin, setAdmin] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passRepeat, setPassRepeat] = useState('');

  return (
    <div>
      <ridersAppContext.Provider value = {
        { page, setPage, eventsList, setEventsList, currentBlock, setCurrentBlock, admin, setAdmin, pageEvent, setPageEvent, pass, setPass,
          passRepeat, setPassRepeat, email, setEmail }
      }>
        <SwitchPage/>
      </ridersAppContext.Provider>
    </div>
  );
}

export default App;
