import styled from 'styled-components';
import checkSVG from './check-bold.svg';

const Wrapper = styled.div`
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 4rem;
  color: var(--black);

  width: 80rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    margin: 0 1rem;
    border-bottom: 0.2rem solid rgba(0, 0, 0, 0.15);

    h1 {
      font-size: 4rem;
    }

    svg {
      font-size: 3rem;
      color: var(--grey);
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: var(--black);
      }
    }
  }

  section {
    padding: 4rem 0;
    margin: 0 4rem;

    & + section {
      border-top: 0.2rem solid rgba(0, 0, 0, 0.15);
    }

    &.time {
      > div {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;

        label {
          color: var(--grey);
          font-weight: bold;
        }
      }
    }

    &.font,
    &.color {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > div {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  button {
    align-self: center;
    width: 20rem;
    margin-bottom: -1.5rem;
    border: none;
    background: var(--red);
    padding: 1rem;
    border-radius: 4rem;
    color: var(--white);
    font-weight: 700;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

const Input = styled.div`
  display: flex;
  margin-top: 1rem;
  background: var(--light);
  border: none;
  height: 6rem;
  border-radius: 1rem;
  width: 20rem;

  input {
    flex: 1;
    background: none;
    border: none;
    margin: 0 2rem;

    font-weight: 700;
    font-size: 2.4rem;

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      background: url("data:image/svg+xml,%3Csvg width='14' height='21' viewBox='0 0 14 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6L7 2L13 6' stroke='%231E213F' stroke-opacity='0.25' stroke-width='2'/%3E%3Cpath d='M1 15L7 19L13 15' stroke='%231E213F' stroke-opacity='0.25' stroke-width='2'/%3E%3C/svg%3E%0A")
        no-repeat center center;
      width: 14px;
      opacity: 0.8; /* shows Spin Buttons per default (Chrome >= 39) */
      cursor: pointer;
    }

    &[type='number']::-webkit-inner-spin-button:hover,
    &[type='number']::-webkit-inner-spin-button:active {
      opacity: 1;
    }
  }
`;

const Fonts = styled.div`
  width: 250px;

  input[type='radio'] {
    width: 60px;
    height: 60px;
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
      font-size: 2rem;
      font-weight: bold;
    }

    &#Arial::after {
      font-family: sans-serif;
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
`;

const Colors = styled.div`
  width: 250px;

  input[type='radio'] {
    width: 60px;
    height: 60px;
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
      }
    }
  }
`;

export { Wrapper, Form, Input, Fonts, Colors };
