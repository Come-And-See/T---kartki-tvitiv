import React from 'react';
import './App.css';
import Home from './Page/Home/Home';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import NavLinks from './Components/NavLinks/NavLinks';
import Tweets from './Page/Tweets/Tweets';

function App() {
  return (
    <HashRouter>
      <nav>
        <NavLinks />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tweets" component={Tweets} />
        <Route path="*" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;