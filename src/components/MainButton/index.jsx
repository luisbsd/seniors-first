import React, { Fragment } from 'react';
import {
  withStyles,
} from '@material-ui/styles';
import {
  Button,
} from '@material-ui/core';
import theme from '../../scss/theme/colors';
import Props from './props';

const SolidButton = withStyles({
  root: {
    color: '#fff',
    borderRadius: 30,
    minHeight: 48,
    width: '100%',
    maxWidth: 352,
    marginBottom: '2rem',
    textTransform: 'inherit',
    boxShadow: '0 14px 19px 0 rgba(0,81,204,0.22)',
    backgroundColor: theme.blue.dark,
    '&:hover': {
      backgroundColor: theme.blue.darker,
    },
  },
})(Button);

const BorderButton = withStyles({
  root: {
    color: theme.blue.main,
    borderRadius: 30,
    minHeight: 32,
    width: '100%',
    maxWidth: 169,
    fontSize: 13,
    textTransform: 'capitalize',
    border: `1px solid ${theme.blue.main}`,
    backgroundColor: '#fff',
    boxShadow: 'none',
    '&:hover': {
      color: theme.blue.dark,
      border: `1px solid ${theme.blue.dark}`,
      backgroundColor: '#fff',
    },
  },
})(Button);

const MainButton = ({
  text,
  onClick,
  borderButton,
}) => (
  <Fragment>
    {borderButton && <BorderButton onClick={onClick}>{text}</BorderButton>}
    {!borderButton && <SolidButton onClick={onClick}>{text}</SolidButton>}
  </Fragment>
);

MainButton.propTypes = Props;
export default MainButton;
