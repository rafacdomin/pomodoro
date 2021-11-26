import { useCallback, useEffect, useMemo, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useSound from 'use-sound';
import { useConfig } from '../../hooks/config';

import { Counter } from './styles';

interface ITimerProps {
  type: 'pomodoro' | 'short' | 'long';
}

export const Timer: React.FC<ITimerProps> = ({ type }) => {
  const localConfig = useConfig();
  const [timer, setTimer] = useState<NodeJS.Timeout | number>();
  const [counter, setCounter] = useState(localConfig.pomodoro * 60);

  const [alert] = useSound('/sounds/alert.mp3');
  const [startClick] = useSound('/sounds/start-click.mp3');
  const [stopClick] = useSound('/sounds/stop-click.mp3');

  const config = useMemo(() => {
    return {
      pomodoro: localConfig.pomodoro * 60,
      short: localConfig.short * 60,
      long: localConfig.long * 60,
    };
  }, [localConfig]);

  const startTimer = useCallback(() => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setCounter((state) => state - 1);
        }, 1000)
      );
    }
  }, [timer]);

  const pauseTimer = useCallback(() => {
    clearInterval(Number(timer));
    setTimer(0);
  }, [timer]);

  const resetTimer = useCallback(() => {
    setCounter(config[type]);
  }, [config, type]);

  useEffect(() => {
    resetTimer();
  }, [type, resetTimer]);

  useEffect(() => {
    if (counter <= 0) {
      alert();
      pauseTimer();
      resetTimer();
    }
  }, [counter, pauseTimer, resetTimer, alert]);

  const convertSeconds = useMemo(() => {
    const minutes = parseInt(String(counter / 60));
    const seconds = counter % 60;

    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  }, [counter]);

  const percentage = useMemo(() => {
    return (counter / config[type]) * 100;
  }, [counter, config, type]);

  const playOrPause = useMemo(() => {
    if (!!timer) {
      return 'PAUSE';
    }

    return 'PLAY';
  }, [timer]);

  return (
    <Counter
      font={localConfig.font}
      color={localConfig.color}
      onClick={ !timer ? startTimer : pauseTimer }
      onMouseDown={() => timer ? stopClick() : startClick() }
    >
      <div>
        <CircularProgressbarWithChildren value={percentage} strokeWidth={2}>
          <h1>{convertSeconds}</h1>
          <span>{playOrPause}</span>
        </CircularProgressbarWithChildren>
      </div>
    </Counter>
  );
};
