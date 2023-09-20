import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss';
import Button from '../Button/Button';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const formattedTime = new Date(time * 1000).toISOString().substr(11, 8);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>STOPWATCH APP</h1>
      <p className={styles.Timer}>{formattedTime}</p>
      <div className={styles.buttons}>
      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );

}

export default Timer;
