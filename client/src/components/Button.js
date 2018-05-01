import React from 'react';
import { Button } from 'react-bootstrap';

const Button = ({ handleClick, title }) => (
  <Button bsStyle="primary">{title}</Button>
);

export default Button;
