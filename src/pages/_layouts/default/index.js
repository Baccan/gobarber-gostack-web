import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

// children = todos os componentes filhos que vêm do DefaultLayout()
/**
 * <DefaultLayout>
 *  <Filho /> // children
 * </DefaultLayout>
 */
export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

// Componentes neste formato:
// Component
// são PropTypes.func
// --------------------------
// Componentes neste formato:
// <Component />
// são PropTypes.element
DefaultLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
