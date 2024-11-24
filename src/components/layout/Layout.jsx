// src/components/layout/Layout.jsx
import React from 'react';
import FloatingShapes from '../floatingShapes/FloatingShapes';

const Layout = ({ children }) => {
  return (
    <>
      <FloatingShapes />
      {children}
    </>
  );
};

export default Layout;