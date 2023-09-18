import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import SearchBar from './components/search_bar/search_bar';
import TaxonCard from './components/taxon_card/taxon_card';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <SearchBar />
        <TaxonCard />
        <TaxonCard />
        <TaxonCard />
      </main>
      <Footer />
    </>
  )
}
export default App;