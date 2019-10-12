import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const Contents = React.lazy(() => import('./pages/Contents'));

const Routes = () => (
  <Router>
  <React.Suspense fallback={<p>Please wait</p>}>
  <Switch>
    <Route exact path="/" component={Contents} />
  </Switch>
  </React.Suspense>
  </Router>
)

export default Routes;
