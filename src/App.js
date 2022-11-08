import { useState } from 'react';
import './App.css';
import SwitchPage from './components/SwitchPage';
import { ridersAppContext } from './utils/context';

function App() {
  const [pageEvent, setPageEvent] = useState('');
  const [currentBlock, setCurrentBlock] = useState('allTrips');
  const [ridersList, setRidersList] = useState([]);
  const [spotsList, setSpotsList] = useState([]);
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

  return (
    <div>
      <ridersAppContext.Provider value = {
        { currentBlock, setCurrentBlock, pageEvent, setPageEvent, price, setPrice, minPlaces, setMinPlaces,
          maxPlaces, setMaxPlaces, privacy, setPrivacy, currentEvent, setCurrentEvent, ridersList, setRidersList, currentPage, setCurrentPage, spotsList, setSpotsList, spotId, setSpotId,trackLevel,
          setTrackLevel, spotName, setSpotName, coordinates, setCoordinates  }
      }>
        <SwitchPage/>
      </ridersAppContext.Provider>
    </div>
  );
}

export default App;
