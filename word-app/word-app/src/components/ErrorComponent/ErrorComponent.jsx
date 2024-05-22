import React from 'react';
import './ErrorComponent.css';

const ErrorComponent = ({ message }) => {
  return <div className="error">{message}</div>;
};

export default ErrorComponent;

