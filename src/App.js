import React, {useEffect} from 'react';
import HomePage from './components/homePage/HomePage';
import RoomsPrice from './components/roomsPricingPage/RoomsPrice';

import './UI/global.css'

function App() {

  useEffect(()=> {
    window.scrollTo(0, 0);
    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
    })
  }, []);


  return[
        //<HomePage />
      <RoomsPrice />
  ]
}

export default App;


