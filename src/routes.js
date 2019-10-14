import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';

const Continents = React.lazy(() => import('./pages/Continents'));
const ContinentDetails = React.lazy(() => import('./pages/ContinentDetails'));

const Routes = () => (
  <Router>
   <Header/>
  <React.Suspense fallback={<p style={{position:'absolute', top: '50%', left: '40%'}}>Please wait...</p>}>
  <Switch>
    <Route exact path="/"
    component={({ match, history }) => {
      return <Continents history={history} code={match.params.code} />;
    }}
    />
    <Route
    exact
    path="/continent/:code"
    component={({ match, history }) => {
      return <ContinentDetails history={history} code={match.params.code} />;
    }}
   />
  </Switch>
  </React.Suspense>
  </Router>
)

export default Routes;
