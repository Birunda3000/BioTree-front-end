import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const App = () => {
  let message = 'Hello World';
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}
export default App;