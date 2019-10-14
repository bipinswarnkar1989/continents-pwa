import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


const Continents = React.lazy(() => import('./pages/Continents'));
const ContinentDetails = React.lazy(() => import('./pages/ContinentDetails'));

const Routes = () => (
  <Router>
  <React.Suspense fallback={<p style={{position:'absolute', top: '20%', left: '40%'}}>Please wait...</p>}>
  <Switch>
    <Route exact path="/" component={Continents}  />
    <Route
    exact
    path="/continent/:id"
    render={({ match }) => {
      // Do whatever you want with the match...
      return <ContinentDetails history={history} code={match.params.code} />;
    }}
   />
  </Switch>
  </React.Suspense>
  </Router>
)

export default Routes;
