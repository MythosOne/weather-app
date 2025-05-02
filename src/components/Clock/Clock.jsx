import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CurrentTimeHeader, CurrentTimeCard } from './Clock.styled';
export const Clock = ({ timeZoneOffset, clockHeader }) => {
  const [currentTime, setCurrentTime] = useState({
    localTime: new Date(),
    withOffsetTime: new Date(),
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const timeWithOffset = new Date(utcTime + timeZoneOffset * 1000);

      setCurrentTime({
        localTime: now,
        withOffsetTime: timeWithOffset,
      });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeZoneOffset]);

  return (
    <>
      {clockHeader ? (
        <CurrentTimeHeader>{`${currentTime.localTime.toLocaleTimeString(
          'en-US'
        )}`}</CurrentTimeHeader>
      ) : (
        <CurrentTimeCard>
          {`${currentTime.withOffsetTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}`}
        </CurrentTimeCard>
      )}
    </>
  );
};

Clock.propTypes = {
  timeZoneOffset: PropTypes.number.isRequired,
  clockHeader: PropTypes.bool,
};
