import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import SwitchPage from './components/SwitchPage';
import { currentPageSelector } from './redux/selectors';
import { ridersAppContext } from './utils/context';

function App() {
  const [pageEvent, setPageEvent] = useState('');
  const [currentBlock, setCurrentBlock] = useState('allTrips');
  //const [currentPage, setCurrentPage] = useState('');

  const cur = useSelector(currentPageSelector);

console.log(cur)

  return (
    <div>
      <ridersAppContext.Provider value = {
        { currentBlock, setCurrentBlock, pageEvent, setPageEvent }
      }>
        <SwitchPage/>
      </ridersAppContext.Provider>
    </div>
  );
}

export default App;
