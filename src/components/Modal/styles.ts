import styled from 'styled-components';
import checkSVG from './check-bold.svg';

interface CustomProps {
  font: string;
}

const Wrapper = styled.div<CustomProps>`
  font-family: ${(props) => props.font};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;

  input {
    font-family: ${(props) => props.font};
  }

  button {
    font-family: ${(props) => props.font};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 2rem;
  color: var(--black);

  width: 90%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    margin: 0 0.5rem;
    border-bottom: 0.2rem solid rgba(0, 0, 0, 0.15);

    h1 {
      font-size: 2rem;
    }

    svg {
      font-size: 1.5rem;
      color: var(--grey);
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: var(--black);
      }
    }
  }

  section {
    padding: 2rem 0;
    margin: 0 2rem;
    font-size: 1.2rem;

    h2 {
      font-size: 1.6rem;
    }

    & + section {
      border-top: 0.2rem solid rgba(0, 0, 0, 0.15);
    }

    &.time {
      .input-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1rem;

        .labels {
          display: flex;
          flex-direction: column;

          label {
            display: block;
            height: 3rem;
            color: var(--grey);
            font-weight: bold;

            & + label {
              margin-top: 1rem;
            }
          }
        }
      }
    }

    &.font,
    &.color {
      display: flex;
      flex-direction: column;
      align-items: center;

      > div {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media (min-width: 768px) {
    border-radius: 4rem;
    width: 80rem;

    header {
      padding: 3rem;
      margin: 0 1rem;

      h1 {
        font-size: 4rem;
      }

      svg {
        font-size: 3rem;
      }
    }

    section {
      padding: 4rem 0;
      margin: 0 4rem;
      font-size: 1.6rem;

      h2 {
        font-size: 2.4rem;
      }

      &.time {
        .input-wrapper {
          flex-direction: column;
          justify-content: space-between;
          margin-top: 2rem;

          .labels {
            flex-direction: row;
            justify-content: space-between;

            label {
              display: block;
              width: 20rem;

              & + label {
                margin-top: 0;
              }
            }
          }

          .inputs {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }

      &.color,
      &.font {
        flex-direction: row;
        justify-content: space-between;

        > div {
          margin-top: 0;
        }
      }
    }
  }
`;

const FormButton = styled.button`
  align-self: center;
  width: 10rem;
  font-size: 1.2rem;
  margin-bottom: -1.5rem;
  border: none;
  background: var(--${(props) => props.color});
  padding: 1rem;
  border-radius: 4rem;
  color: var(--white);
  font-weight: 700;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }

  @media (min-width: 768px) {
    width: 20rem;
    font-size: 1.6rem;
  }
`;

const Input = styled.div`
  display: flex;
  background: var(--light);
  border: none;
  height: 3rem;
  border-radius: 0.5rem;
  width: 30vw;

  & + div {
    margin-top: 0.5rem;
  }

  input {
    flex: 1;
    background: none;
    border: none;
    margin: 0 1rem;

    font-weight: 700;
    font-size: 1.2rem;

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      background: url("data:image/svg+xml,%3Csvg width='14' height='21' viewBox='0 0 14 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6L7 2L13 6' stroke='%231E213F' stroke-opacity='0.25' stroke-width='2'/%3E%3Cpath d='M1 15L7 19L13 15' stroke='%231E213F' stroke-opacity='0.25' stroke-width='2'/%3E%3C/svg%3E%0A")
        no-repeat center center;
      width: 8px;
      opacity: 0.6; /* shows Spin Buttons per default (Chrome >= 39) */
      cursor: pointer;
    }

    &[type='number']::-webkit-inner-spin-button:hover,
    &[type='number']::-webkit-inner-spin-button:active {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0.5rem;
    height: 6rem;
    border-radius: 1rem;
    width: 20rem;

    input {
      margin: 0 2rem;
      font-size: 2.4rem;

      &[type='number']::-webkit-inner-spin-button {
        width: 14px;
        opacity: 0.8;
      }
    }
  }
`;

const Fonts = styled.div`
  width: 150px;

  input[type='radio'] {
    width: 40px;
    height: 40px;
    cursor: pointer;
    appearance: none;
    background-color: var(--light);
    color: var(--dark);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: 'Aa';
      font-size: 1.6rem;
      font-weight: bold;
    }

    &#Arial::after {
      font-family: Arial;
    }

    &#Poppins::after {
      font-family: 'Poppins';
    }

    &#serif::after {
      font-family: serif;
    }

    &:checked {
      background-color: var(--darker);
      color: var(--light);
    }
  }

  @media (min-width: 768px) {
    width: 250px;

    input[type='radio'] {
      width: 60px;
      height: 60px;

      &::after {
        font-size: 2rem;
      }
    }
  }
`;

const Colors = styled.div`
  width: 150px;

  input[type='radio'] {
    width: 40px;
    height: 40px;
    cursor: pointer;
    appearance: none;
    border-radius: 50%;

    &#red {
      background-color: var(--red);
    }

    &#blue {
      background-color: var(--blue);
    }

    &#lavender {
      background-color: var(--lavender);
    }

    &:checked {
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        margin-top: 0.5rem;
        content: url(${checkSVG});
        opacity: 0.6;
      }
    }
  }

  @media (min-width: 768px) {
    width: 250px;

    input[type='radio'] {
      width: 60px;
      height: 60px;
    }
  }
`;

export { Wrapper, Form, FormButton, Input, Fonts, Colors };
