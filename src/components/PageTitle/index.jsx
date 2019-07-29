import React from 'react';
import { makeStyles } from '@material-ui/core';
import theme from '../../scss/theme/colors';
import Props from './props';

const useStyles = makeStyles({
  text: {
    color: theme.blue.dark,
    textAlign: 'center',
    fontSize: 42,
    marginBottom: '1rem',
    fontFamily: 'fieldwork, sans-serif',
    fontWeight: 600,
    fontStyle: 'normal',
  },
});

const PageTitle = ({
  text,
}) => {
  const classes = useStyles();
  return (
    <h2 className={classes.text}>
      {text}
    </h2>
  );
};

PageTitle.propTypes = Props;
export default PageTitle;
