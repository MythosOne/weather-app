import React, { useState, useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';

import { Header } from '../Header/Header';
import { Homepage } from '../../pages/Homepage';
import { Footer } from '../Footer/Footer';
import { Container } from './App.styled';
import { Loader } from '../Loader/Loader';

const styles = {
  initial: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: 'opacity 300ms, transform 300ms',
  },
  entered: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 300ms, transform 300ms',
  },
  exited:{
    opacity: 0,
    transform: 'scale(0.9)',
    transition: 'opacity 300ms, transform 300ms',
  },
};

function App() {
  const nodeRef = useRef(null);

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

    // useEffect(() => {
    //   console.log("nodeRef.current App:", nodeRef.current);
    // }, [showComponent]);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="mobile-portal"></div>
      {isConfirmed ? (
        // <Container className={showComponent ? 'active' : 'exit-active'}>
        <Transition
          in={showComponent}
          timeout={300}
          nodeRef={nodeRef}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <Container
              style={{
                ...styles.initial,
                ...(state === 'entered' && styles.entered),
                ...(state === 'exited' && styles.exited),
              }}
              ref={nodeRef}
            >
              {!isHomepageLoaded && <Loader />}
              <Homepage
                location={location}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onLoad={() => setIsHomepageLoaded(true)}
              />
            </Container>
          )}
        </Transition>
      ) : (
        // <Container>
        //   {!isHomepageLoaded && <Loader />}
        //   <Homepage
        //     location={location}
        //     isOpen={isOpen}
        //     setIsOpen={setIsOpen}
        //     onLoad={() => setIsHomepageLoaded(true)}
        //   />
        // </Container>
        <Loader />
      )}
      {isHomepageLoaded && <Footer />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
