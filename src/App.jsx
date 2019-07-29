import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import { composePure, withState, lifecycle } from './utils/composepure';
import Router from './Router';

const App = ({
  loading,
  loaded,
}) => (
    <BrowserRouter basename="/">
      {!loaded && (
        <div className={`load${loading ? '' : ' loaded'}`}>
          <div className="load__icon-wrap">
            <svg className="load__icon">
              <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
            </svg>
          </div>
        </div>
      )}
      {loaded && (
        <Router />
      )}
    </BrowserRouter>
);

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
};

const AppCompose = composePure(
  withState('loading', 'setLoading', true),
  withState('loaded', 'setLoaded', false),
  lifecycle({
    componentDidMount() {
      window.addEventListener('load', () => {
        setTimeout(() => {
          console.info('terminado');
          this.props.setLoaded(true);
          this.props.setLoading(false);
        }, 500);
      });
    },
  }),
)(App);

export default hot(module)(AppCompose);
