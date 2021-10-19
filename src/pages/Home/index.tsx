import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { Header, Main, Counter } from './styles';

interface IConfig {
  pomodoro: number;
  short: number;
  long: number;
}

export const Home: React.FC = () => {
  const [timer, setTimer] = useState<NodeJS.Timeout | number>();
  const [pomodoro, setPomodoro] = useState(25 * 60);
  const [short, setShort] = useState(5 * 60);
  const [long, setLong] = useState(15 * 60);

  useEffect(() => {
    resetTimer();
  }, []);

  useEffect(() => {
    if (pomodoro <= 0) {
      pauseTimer();
      resetTimer();
    }
  }, [pomodoro]);

  const startTimer = useCallback(() => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setPomodoro((state) => state - 1);
        }, 1000)
      );
    }
  }, [timer]);

  const pauseTimer = useCallback(() => {
    clearInterval(Number(timer));
    setTimer(0);
  }, [timer]);

  const resetTimer = useCallback(() => {
    const storagedConfig = localStorage.getItem('pomodoro');

    if (storagedConfig) {
      const config = JSON.parse(storagedConfig) as IConfig;

      setPomodoro(config.pomodoro * 60);
      setShort(config.short * 60);
      setLong(config.long * 60);
    } else {
      setPomodoro(25 * 60);
      setShort(5 * 60);
      setLong(15 * 60);
    }
  }, []);

  const convertSeconds = useMemo(() => {
    const minutes = parseInt(String(pomodoro / 60));
    const seconds = pomodoro % 60;

    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  }, [pomodoro]);

  return (
    <>
      <Header>
        <h1>pomodoro</h1>
        <nav>
          <button className="active">pomodoro</button>
          <button>short break</button>
          <button>long break</button>
        </nav>
      </Header>
      <Main>
        <Counter onClick={!timer ? startTimer : pauseTimer}>
          <div>
            <h1>{convertSeconds}</h1>
            <span>PAUSE</span>
          </div>
        </Counter>
        <footer>
          <button>
            <IoMdSettings />
          </button>
        </footer>
      </Main>
    </>
  );
};
