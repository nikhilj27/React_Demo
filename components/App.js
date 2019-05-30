import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import ContactList from './ContactList';
import JokeList from './JokeList';
import ProductList from './ProductList';
import ClassBased from './ClassBased'
import State from './State'
import StatePractice from './StatePractice';
import StatePractice2 from './StatePractice2';
import SetState from './setState';
import ConditionalRendering from './ConditionalRendering';
import ConditioanlRenderingPractice from './ConditionalRenderingPractice';
import FetchingDataFromAPI from './FetchingDataFromAPI';
import Forms from './Forms';
import FormPractice from './FormPractice';

function App() {
  return (
    <div>
      {/* <Header />
      <MainContent />
      <Footer />

      <ContactList />
      <JokeList />

      <ProductList />

      <ClassBased />

      <State />

      <StatePractice />

      <StatePractice2 />

      <SetState /> 

      <ConditionalRendering />

      <ConditioanlRenderingPractice />

      <FetchingDataFromAPI />

      <Forms />*/}

      <FormPractice />
    </div>
  );
}

export default App;
