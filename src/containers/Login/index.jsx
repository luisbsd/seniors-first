import React from 'react';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';
import PageWrapper from '../../components/PageWrapper';
import theme from '../../scss/theme/colors';
import MainButton from '../../components/MainButton';
import InputText from '../../components/InputText';
import SocilaIconGroup from '../../components/SocialIconGroup';
import PageTitle from '../../components/PageTitle';
import Props from './props';

const useStyles = makeStyles({
  margin: {
    margin: 0,
  },
  supportText: {
    fontSize: 14,
    color: theme.blue.darker,
    fontWeight: 'bold',
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <PageWrapper
      maxWidth="lg"
      className="Login"
    >
      <Grid container className="x-center">
        <Grid item xs={12}>
          <PageTitle text="Inicia sesión" />
        </Grid>
        <Grid item xs={12} className="x-center">
          <InputText
            className={classes.textfield}
            id="outlined-email-input"
            label="Usuario"
            type="text"
            name="text"
            placeholder="Ingresá tu usuario"
            autoComplete="text"
          />
        </Grid>
        <Grid item xs={12} className="xy-center direction-column">
          <InputText
            id="standard-password-input"
            label="Password"
            className={classes.textfield}
            type="password"
            placeholder="Ingresa tu contraseña"
            autoComplete="current-password"
          />
          <button
            type="button"
            className="Login__forgot"
          >
            ¿Olvidaste la contraseña?
          </button>
        </Grid>
        <Grid item xs={12} className="x-center">
          <MainButton
            text="Iniciar sesión"
          />
        </Grid>
      </Grid>
      <Grid container className="x-center">
        <Grid item xs={6} className="xy-center direction-column">
          <p className={classes.supportText}>¿Aún no tienes cuenta?</p>
          <MainButton
            text="Registrate"
            borderButton
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4} className="xy-center direction-column">
          <SocilaIconGroup text="Login with" />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

Login.propTypes = Props;
export default Login;
