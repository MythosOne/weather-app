import React, {useState, useEffect} from 'react';
import { Header } from '../Header/Header';
import { Homepage } from '../../pages/Homepage';
import { Footer } from '../Footer/Footer';
import { Container } from './App.styled';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log("App-isOpen:", isOpen);
  const [showComponent, setShowComponent] = useState(false);
  // console.log('showComponent:', showComponent);

  useEffect(() => {
    setShowComponent(!showComponent);
    // console.log(showComponent)
  }, []);

  return (
    <Container className={showComponent ? 'active' : 'exit-active'}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Homepage isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Footer />
    </Container>
  );
}

export default App;
