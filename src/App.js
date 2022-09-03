import { useState } from 'react';
import './App.css';
import SwitchPage from './components/SwitchPage';
import { ridersAppContext } from './utils/context';

function App() {
  const [page, setPage] = useState('');
  const [pageEvent, setPageEvent] = useState('');
  const [currentBlock, setCurrentBlock] = useState('allTrips');
  const [eventsList, setEventsList] = useState([]);
  const [myRuns, setMyRuns] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const [ridersList, setRidersList] = useState([]);
  const [spotsList, setSpotsList] = useState([]);
  const [admin, setAdmin] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [passRepeat, setPassRepeat] = useState('');
  const [userId, setUserId] = useState(-1);
  const [date, setDate] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [driver, setDriver] = useState('');
  const [price, setPrice] = useState('');
  const [minPlaces, setMinPlaces] = useState(0);
  const [maxPlaces, setMaxPlaces] = useState(0);
  const [privacy, setPrivacy] = useState(0);
  const [spotId, setSpotId] = useState(-1);
  const [spotName, setSpotName] = useState('');
  const [trackLevel, setTrackLevel] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(-1);
  const [currentPage, setCurrentPage] = useState('');
  const [userData, setUserData] = useState('');
  const [oldPass, setOldPass] = useState('');

  return (
    <div>
      <ridersAppContext.Provider value = {
        { page, setPage, eventsList, setEventsList, currentBlock, setCurrentBlock, admin, setAdmin, pageEvent, setPageEvent, pass, setPass,
          passRepeat, setPassRepeat, email, setEmail, userId, setUserId, date, setDate, driver, setDriver, price, setPrice, minPlaces, setMinPlaces,
          maxPlaces, setMaxPlaces, privacy, setPrivacy, dateEnd, setDateEnd, myRuns, setMyRuns, currentEvent, setCurrentEvent, myEvents,
          setMyEvents, ridersList, setRidersList, currentPage, setCurrentPage, spotsList, setSpotsList, spotId, setSpotId,trackLevel,
          setTrackLevel, spotName, setSpotName, userData, setUserData, coordinates, setCoordinates, oldPass, setOldPass, phone, setPhone,
          username, setUsername }
      }>
        <SwitchPage/>
      </ridersAppContext.Provider>
    </div>
  );
}

export default App;
