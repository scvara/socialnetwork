import React from 'react';
import './App.css';
import Profile from './components/Contentpart/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='second_raw'>
        <Navigation />
        <div className='content_part'></div>
        <Profile />
      </div>
    </div>

  );
}

export default App;
