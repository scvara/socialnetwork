import React from 'react';
import './App.css';
import Profile from './components/Contentpart/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className='second_raw'>
          <Navigation />
          <div className='content_part'>
            <Route path='/myprofile' component={Profile} />
            <Route path='/messages'component={Dialogs} />
          </div>

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
