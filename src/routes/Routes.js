import React from 'react';
import PropType from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropType.bool,
  component: PropType.oneOfType([PropType.element, PropType.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
