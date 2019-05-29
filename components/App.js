import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import ContactList from './ContactList';
import JokeList from './JokeList';
import ProductList from './ProductList';
import ClassBased from './ClassBased'

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />

      <ContactList />
      <JokeList />

      <ProductList />

      <ClassBased />
    </div>
  );
}

export default App;
