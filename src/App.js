import React from 'react';
import './App.css';
import Profile from './components/Contentpart/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='second_raw'>
          <Navigation friendInfo={props.state.sidebarPage.friends} />
          <div className='content_part'>
            <Route path='/myprofile' 
            render={() => <Profile posts={props.state.profilePage.posts}
                                   newPostText={props.state.profilePage.newPostText}
                                   dispatch={props.dispatch} />} />
            <Route path='/messages'
            render={() => <Dialogs dialogs={props.state.dialogPage.dialogs}
                                   messages={props.state.dialogPage.messages}
                                   newMessageText={props.state.dialogPage.newMessageText}
                                   dispatch={props.dispatch} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
