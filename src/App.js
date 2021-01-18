import React from 'react';
import './App.css';
import EnterFin from './screens/Enter_Fin/EnterFin';
import Enter from './screens/Enter/Enter';
import FormPart1 from './screens/FormPart1/FormPart1';
import { Route, Switch } from 'react-router-dom';
import FormPart2 from './screens/FormPart2/FormPart2';
import FormPart3 from './screens/FormPart3/FormPart3';
import Success from './screens/Success/Success';
import Profile from './screens/Profile/Profile';
import { HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <div className="app-wrapper-content">
          <Switch>
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/success' render={() => <Success />} />
            <Route path='/formPart3' render={() => <FormPart3 />} />
            <Route path='/formPart2' render={() => <FormPart2 />} />
            <Route path='/formPart1' render={() => <FormPart1 />} />
            <Route path='/enter' render={() => <Enter />} />
            <Route path='/' render={() => <EnterFin />} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
