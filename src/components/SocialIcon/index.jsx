import React from 'react';
import {
  withStyles, Fab,
} from '@material-ui/core';
import AwesomeIcon from '../AwesomeIcon';
import theme from '../../scss/theme/colors';
import Props from './props';

const CustomIcon = withStyles({
  root: {
    margin: 0,
    marginRight: '1rem',
    backgroundColor: theme.blue.main,
    '&:hover': {
      backgroundColor: theme.blue.dark,
    },
  },
})(Fab);

const SocialIcon = ({
  icon,
  size = 'small',
}) => (
  <CustomIcon
    size={size}
    color="secondary"
    aria-label="add"
  >
    <AwesomeIcon icon={icon} />
  </CustomIcon>
);

SocialIcon.propTypes = Props;
export default SocialIcon;
