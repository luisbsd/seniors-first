import React from 'react';
import {
  withStyles,
  TextField,
} from '@material-ui/core';
import theme from '../../scss/theme/colors';
import Props from './props';

const CssTextField = withStyles({
  root: {
    margin: 0,
    width: '100%',
    marginBottom: '1rem',
    maxWidth: 359,
    '& .MuiInputLabel-formControl': {
      color: theme.blue.dark,
      right: 0,
      textAlign: 'center',
      fontSize: 12,
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0, 0) scale(1)',
      fontSize: 10,
    },
    '& .MuiInput-input': {
      textAlign: 'center',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: theme.gray.light,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.blue.dark,
    },
  },
})(TextField);

const InputText = ({
  id,
  label,
  type,
  name,
  placeholder,
  autoComplete,
}) => (
  <CssTextField
    id={id}
    label={label}
    type={type}
    name={name}
    placeholder={placeholder}
    autoComplete={autoComplete}
  />
);

InputText.propTypes = Props;
export default InputText;
