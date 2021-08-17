import React from 'react'
import Header from './Header';
import Footer from './Footer';
import '../index.css';
import {useEffect, useState} from 'react'; 
import { react } from '@babel/types';
import api from '../utils/Api.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
