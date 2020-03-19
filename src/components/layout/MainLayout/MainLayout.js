import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => (
  <div>
    <main>
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
