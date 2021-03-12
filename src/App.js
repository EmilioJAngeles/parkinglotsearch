import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { SearchResults } from './SearchResults/SearchResults'
import { OpenPage } from './OpenPage';


function App() {
  return (
      <Switch>
        <Route path = '/searchresults' component={SearchResults}/>
        <Route path = '/' component={OpenPage}/>
      </Switch>
  );
}

export default App;
