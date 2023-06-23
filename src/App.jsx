import React from 'react';
import './App.css';
import Home from './Page/Home/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavLinks from './Components/NavLinks/NavLinks';
import Tweets from './Page/Tweets/Tweets';

function App() {
  return (
    <HashRouter>
      <nav>
        <NavLinks />
      </nav>

      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/tweets" component={Tweets} />
        <Route path="*" component={Home} />
      </Routes>
    </HashRouter>
  );
}

export default App;