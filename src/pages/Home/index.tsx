import { useState } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { Header, Main } from './styles';
import 'react-circular-progressbar/dist/styles.css';

import { Timer } from '../../components/Timer';

export const Home: React.FC = () => {
  const [type, setType] = useState<'pomodoro' | 'short' | 'long'>('pomodoro');

  return (
    <>
      <Header>
        <h1>pomodoro</h1>
        <nav>
          <button
            onClick={() => setType('pomodoro')}
            className={type === 'pomodoro' ? 'active' : ''}
          >
            pomodoro
          </button>
          <button
            onClick={() => setType('short')}
            className={type === 'short' ? 'active' : ''}
          >
            short break
          </button>
          <button
            onClick={() => setType('long')}
            className={type === 'long' ? 'active' : ''}
          >
            long break
          </button>
        </nav>
      </Header>
      <Main>
        <Timer type={type} />
        <footer>
          <button>
            <IoMdSettings />
          </button>
        </footer>
      </Main>
    </>
  );
};
