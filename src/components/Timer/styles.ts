import styled from 'styled-components';

const Counter = styled.button`
  box-shadow: -4rem -4rem 4rem rgba(217, 225, 251, 0.05),
    4rem 4rem 4rem rgba(21, 25, 50, 0.8);

  position: relative;
  background: linear-gradient(
    130deg,
    rgba(21, 25, 50, 1) 40%,
    rgba(217, 225, 251, 0.2)
  );
  padding: 2.4rem;
  border: none;
  border-radius: 50%;
  color: var(--light);
  transition: transform 0.2s;

  > div {
    width: 42rem;
    height: 42rem;
    background: var(--darker);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .CircularProgressbar {
      width: 40rem;
      height: 40rem;
    }

    .CircularProgressbar-path {
      stroke: var(--red);
    }

    .CircularProgressbar-trail {
      stroke: var(--darker);
    }

    h1 {
      display: inline-block;
      font-size: 11rem;
    }

    span {
      width: 100%;
      display: inline-block;
      transition: color 0.2s;
    }

    &:hover {
      span {
        color: var(--red);
      }
    }
  }

  &:active {
    transform: translate(0.2rem, 0.2rem);
  }
`;

export { Counter };
