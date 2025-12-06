import React from 'react'
import { Container } from 'react-bootstrap';
import Navigation from './navigation.layout';

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
       
      {children}
    </React.Fragment>
  );
};

export default MainLayout;