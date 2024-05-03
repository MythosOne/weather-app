import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { Homepage } from '../../pages/Homepage';
import { Footer } from '../Footer/Footer';
import { Container } from './App.styled';
import { Loader } from '../Loader/Loader';

function App() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleSuccess = position => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = () => {
      setIsLoading(true);

      alert('Enable geolocation on your browser');
      console.log('Error geolocation data');
    };

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      alert('Geolocation is not supported by your browser');
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    setShowComponent(location.latitude !== null);
  }, [location.latitude]);

  return (
    <>
      {location.latitude !== null && (
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <Container className={showComponent ? 'active' : 'exit-active'}>
        {location.latitude !== null && (
          <>
            <div id="mobile-portal"></div>
            <Homepage
              location={location}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <Footer />
          </>
        )}
      </Container>
      {isLoading && <Loader />}
    </>
  );
}

export default App;
