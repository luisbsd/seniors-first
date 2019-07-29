import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Login from './containers/Login';

/*
// Check Login
const isLogged = (component, logged) => {
  if (logged) return component;
  return Login;
};
*/

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* Route above redirects to Login or Dashboard components */}
        {/* <Route exact path="/" component={isLogged(Dashboard, logged)} /> */}
      </Switch>
    </main>
  </MainWrapper>
);


/*
Router.propTypes = {
  logged: propTypes.bool.isRequired,
};

export default composePure(
  connect(state => ({
    logged: state.Users.logged,
  }), undefined),
)(Router);
*/

export default Router;
