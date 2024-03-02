import React, {useState} from 'react';
import { Header } from '../Header/Header';
import { Homepage } from '../../pages/Homepage';
import { Footer } from '../Footer/Footer';
// import { Container } from './App.styled';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log("App-isOpen:", isOpen);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Homepage isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Footer />
    </>
  );
}

export default App;
