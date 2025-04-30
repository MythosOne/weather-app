import { useState, useEffect} from 'react';

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
            onLoad={() =>
              setTimeout(() => {
                setIsHomepageLoaded(true);
              }, 300)
            }
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
