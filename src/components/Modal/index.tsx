import { Form, FormButton, Wrapper, Input, Fonts, Colors } from './styles';
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
      const { pomodoro, long, short, font, color } = event.target.elements;

      config.saveConfig({
        pomodoro: pomodoro.value,
        long: long.value,
        short: short.value,
        font: font.value,
        color: color.value,
      });

      controlModal();
    },
    [config, controlModal]
  );

  return isOpen ? (
    <Wrapper ref={modalRef} onClick={closeModal} font={config.font}>
      <Form onSubmit={handleSubmit}>
        <header>
          <h1>Settings</h1>
          <FiX onClick={controlModal} aria-label="Close" />
        </header>
        <section className="time">
          <h2>Time (Minutes)</h2>

          <div className="input-wrapper">
            <div className="labels">
              <label htmlFor="pomodoro">pomodoro</label>
              <label htmlFor="short">short break</label>
              <label htmlFor="long">long break</label>
            </div>
            <div className="inputs">
              <Input>
                <input
                  defaultValue={config.pomodoro}
                  id="pomodoro"
                  type="number"
                  min="5"
                  max="90"
                />
              </Input>
              <Input>
                <input
                  defaultValue={config.short}
                  id="short"
                  type="number"
                  min="1"
                  max="15"
                />
              </Input>
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
            <input
              type="radio"
              name="font"
              id="Poppins"
              value="Poppins"
              defaultChecked={config.font === 'Poppins'}
            />
            <input
              type="radio"
              name="font"
              id="Arial"
              value="Arial"
              defaultChecked={config.font === 'Arial'}
            />
            <input
              type="radio"
              name="font"
              id="serif"
              value="serif"
              defaultChecked={config.font === 'serif'}
            />
          </Fonts>
        </section>
        <section className="color">
          <h2>Color</h2>

          <Colors>
            <input
              type="radio"
              name="color"
              id="red"
              value="red"
              defaultChecked={config.color === 'red'}
            />
            <input
              type="radio"
              name="color"
              id="blue"
              value="blue"
              defaultChecked={config.color === 'blue'}
            />
            <input
              type="radio"
              name="color"
              id="lavender"
              value="lavender"
              defaultChecked={config.color === 'lavender'}
            />
          </Colors>
        </section>
        <FormButton color={config.color} type="submit">
          Apply
        </FormButton>
      </Form>
    </Wrapper>
  ) : null;
};

export { Modal };
