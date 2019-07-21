import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

// children = todos os componentes filhos que vêm do AuthLayout()
/**
 * <AuthLayout>
 *  <Filho /> // children
 * </AuthLayout>
 */
export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

// Componentes neste formato:
// Component
// são PropTypes.func
// --------------------------
// Componentes neste formato:
// <Component />
// são PropTypes.element
AuthLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
