import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import SearchBar from './components/search_bar/search_bar';
import TaxonCard from './components/taxon_card/taxon_card';
//import Home from './components/home/home';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <SearchBar />
        <TaxonCard />

      </main>
      <Footer />
    </>
  )
}
export default App;