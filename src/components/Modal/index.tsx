import { Form, Wrapper, Input, Fonts, Colors } from './styles';
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
    (event) => {
      if (modalRef.current === event.target) {
        controlModal();
      }
    },
    [controlModal]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { pomodoro, long, short } = event.target.elements;

      config.saveConfig({
        pomodoro: pomodoro.value,
        long: long.value,
        short: short.value,
        font: 'Poppins',
        color: 'red',
      });

      controlModal();
    },
    [config, controlModal]
  );

  return isOpen ? (
    <Wrapper ref={modalRef} onClick={closeModal}>
      <Form onSubmit={handleSubmit}>
        <header>
          <h1>Settings</h1>
          <FiX onClick={controlModal} aria-label="Close" />
        </header>
        <section className="time">
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
        <section className="font">
          <h2>Font</h2>

          <Fonts>
            <input type="radio" name="font" id="Poppins" value="Poppins" />
            <input type="radio" name="font" id="Arial" value="Arial" />
            <input type="radio" name="font" id="serif" value="serif" />
          </Fonts>
        </section>
        <section className="color">
          <h2>Color</h2>

          <Colors>
            <input type="radio" name="color" id="red" value="red" />
            <input type="radio" name="color" id="blue" value="blue" />
            <input type="radio" name="color" id="lavender" value="lavender" />
          </Colors>
        </section>
        <button type="submit">Apply</button>
      </Form>
    </Wrapper>
  ) : null;
};

export { Modal };
