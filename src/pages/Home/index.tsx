import { useCallback, useState } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { Header, Main } from './styles';

import { Timer } from '../../components/Timer';
import { Modal } from '../../components/Modal';
import { useConfig } from '../../hooks/config';

export const Home: React.FC = () => {
  const localConfig = useConfig();
  const [type, setType] = useState<'pomodoro' | 'short' | 'long'>('pomodoro');
  const [showModal, setShowModal] = useState(false);

  const controlModal = useCallback(() => {
    setShowModal((state) => !state);
  }, []);

  return (
    <>
      <Modal isOpen={showModal} controlModal={controlModal} />
      <Header color={localConfig.color}>
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
          <button onClick={controlModal}>
            <IoMdSettings />
          </button>
        </footer>
      </Main>
    </>
  );
};
