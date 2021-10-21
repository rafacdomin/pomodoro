import { Form, Wrapper, Input } from './styles';
import { FiX } from 'react-icons/fi';
import { useCallback, useRef } from 'react';
import { useConfig } from '../../hooks/config';

interface IModalProps {
  isOpen: boolean;
  controlModal(): void;
}

const Modal: React.FC<IModalProps> = ({ isOpen, controlModal }) => {
  const modalRef = useRef(null);
  const config = useConfig();

  const closeModal = useCallback(
    (e) => {
      if (modalRef.current === e.target) {
        controlModal();
      }
    },
    [controlModal]
  );

  return isOpen ? (
    <Wrapper ref={modalRef} onClick={closeModal}>
      <Form>
        <header>
          <h1>Settings</h1>
          <FiX onClick={controlModal} aria-label="Close" />
        </header>
        <section>
          <h2>Time (Minutes)</h2>

          <div>
            <div>
              <label htmlFor="pomodoro">pomodoro</label>
              <Input>
                <input
                  defaultValue={config.pomodoro}
                  id="pomodoro"
                  type="number"
                  min="5"
                  max="90"
                />
              </Input>
            </div>
            <div>
              <label htmlFor="short">short break</label>
              <Input>
                <input
                  defaultValue={config.short}
                  id="short"
                  type="number"
                  min="1"
                  max="15"
                />
              </Input>
            </div>
            <div>
              <label htmlFor="long">long break</label>
              <Input>
                <input
                  defaultValue={config.long}
                  id="long"
                  type="number"
                  min="15"
                  max="30"
                />
              </Input>
            </div>
          </div>
        </section>
        <section>
          <h2>Font</h2>
        </section>
        <section>
          <h2>Color</h2>
        </section>
        <button type="submit">Apply</button>
      </Form>
    </Wrapper>
  ) : null;
};

export { Modal };
