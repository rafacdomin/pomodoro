import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import { Header, Main, Counter } from './styles';

export const Home: React.FC = () => {
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
        <Counter>
          <div>
            <h1>17:59</h1>
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
