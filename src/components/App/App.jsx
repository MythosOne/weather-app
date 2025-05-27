import { useState, useEffect, useCallback } from 'react';
import { errorHandler } from 'error/errorHandler';

import { Header } from '../Header/Header';
import { Homepage } from '../../pages/Homepage';
import { Footer } from '../Footer/Footer';
import { Loader } from '../Loader/Loader';

function App() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isHomepageLoaded, setIsHomepageLoaded] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSuccess = useCallback(position => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
    setIsLoading(false);
  }, []);

  const handleLocationError = useCallback(() => {
    errorHandler({
      id: 'geo-error',
      message: 'Please, enable geolocation in your browser',
    });

    setLocation(prev => ({ ...prev, latitude: -1, longitude: -1 }));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    // const handleSuccess = position => {
    //   const { latitude, longitude } = position.coords;
    //   setLocation({ latitude, longitude });
    //   setIsLoading(false);
    // };

    // const handleError = () => {
    //   errorHandler({
    //     id: 'geo-error',
    //     message: 'Please, enable geolocation in your browser',
    //   });

    //   setLocation({ ...location, latitude: -1, longitude: -1 });
    //   setIsLoading(false);
    // };

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleLocationError
      );
    } else {
      errorHandler({
        id: 'geo-not-supported',
        message: 'Geolocation is not supported by your browser',
      });
    }

    setIsConfirmed(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isHomepageLoaded && <Header isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div id="mobile-portal"></div>
      {isConfirmed ? (
        <>
          {!isHomepageLoaded && <Loader />}
          <Homepage
            location={location}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsHomepageLoaded={setIsHomepageLoaded}
          />
        </>
      ) : (
        <Loader />
      )}
      {isHomepageLoaded && <Footer />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
