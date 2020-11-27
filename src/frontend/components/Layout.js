import React from 'react';
import '../assets/styles/App.styl';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="layout-container">{children}</div>
    <Footer />
  </div>
);

export default Layout;
