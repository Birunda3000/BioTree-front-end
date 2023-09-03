import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import SearchBar from './components/search_bar/search_bar';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <SearchBar />
      </main>
      <Footer />
    </>
  )
}
export default App;