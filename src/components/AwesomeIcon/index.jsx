import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import Props from './props';

const AwesomeIcon = ({
  icon,
  ...iconProps
}) => (
  <Fragment>
    {icon === 'fb' && <FontAwesomeIcon icon={faFacebookF} {...iconProps} />}
    {icon === 'ig' && <FontAwesomeIcon icon={faInstagram} {...iconProps} />}
    {icon === 'google' && <FontAwesomeIcon icon={faGoogle} {...iconProps} />}
  </Fragment>
);

AwesomeIcon.propTypes = Props;
export default AwesomeIcon;
