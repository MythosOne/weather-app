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
  const [isHomepageLoaded, setIsHomepageLoaded] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  // console.log('isConfirmed:', isConfirmed);
  // console.log('isHomepageLoaded:', isHomepageLoaded);

  useEffect(() => {
    setIsLoading(true);

    const handleSuccess = position => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      setIsLoading(false);
    };

    const handleError = () => {
      alert('Please, enable geolocation in your browser');
      console.log('Error geolocation data');

      setLocation({ ...location, latitude: -1, longitude: -1 });
      setIsLoading(false);
    };

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      alert('Geolocation is not supported by your browser');
    }

    setIsConfirmed(true);
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    setShowComponent(location.latitude !== null);
  }, [location]);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="mobile-portal"></div>
      {isConfirmed ? (
        <Container className={showComponent ? 'active' : 'exit-active'}>
          {!isHomepageLoaded && <Loader />}
          <Homepage
            location={location}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onLoad={() => setIsHomepageLoaded(true)}
          />
        </Container>
      ) : (
        <Loader />
      )}
      {isHomepageLoaded && <Footer />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
