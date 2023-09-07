import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals, action, comedy, romance, documentary, horror} from './urls'



function App() {
  return (
   <>
   <NavBar />
   <Banner />

   <RowPost url={originals} title='Netflix Originals' />
   <RowPost url={action} title='Action' isSmall />
   <RowPost url={comedy} title = 'Comedy' isSmall />
   <RowPost url={horror} title = 'Horror' isSmall />
   <RowPost url={romance} title = 'Romance' isSmall />
   <RowPost url={documentary} title = 'Documentaries' isSmall />
   
   </>
  );
}

export default App;
