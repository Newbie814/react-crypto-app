import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, Divider } from 'antd';

import {
  Navbar,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Homepage,
} from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/' element={<Exchanges />} />
              <Route path='/' element={<Cryptocurrencies />} />
              <Route path='/' element={<CryptoDetails />} />
              <Route path='/' element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'></div>
    </div>
  );
};

export default App;
