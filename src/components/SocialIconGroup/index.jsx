import React, { Fragment } from 'react';
import {
  Grid,
  Fab,
  makeStyles,
} from '@material-ui/core';
import SocialIcon from '../SocialIcon';
import AwesomeIcon from '../AwesomeIcon';
import theme from '../../scss/theme/colors';
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

const SocilaIconGroup = ({
  text,
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <p className={classes.supportText}>{text}</p>
      <Grid>
        <SocialIcon icon="fb" />
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
        >
          <AwesomeIcon icon="google" />
        </Fab>
      </Grid>
    </Fragment>
  );
};

SocilaIconGroup.propTypes = Props;
export default SocilaIconGroup;
