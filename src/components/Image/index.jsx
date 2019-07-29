import React, { Fragment } from 'react';
import {
  Image as Img,
} from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import Props from './props';

const Image = ({
  src,
  ...props
}) => (
  <Fragment>
    {src === 'logo' && <Img src={Logo} {...props} />}
  </Fragment>
);

Image.propTypes = Props;
export default Image;
