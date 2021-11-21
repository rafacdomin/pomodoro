import styled from 'styled-components';

interface CustomProps {
  font: string;
}

const Counter = styled.button<CustomProps>`
  font-family: ${(props) => props.font};
  box-shadow: -4rem -4rem 4rem rgba(217, 225, 251, 0.05),
    4rem 4rem 4rem rgba(21, 25, 50, 0.8);

  position: relative;
  background: linear-gradient(
    130deg,
    rgba(21, 25, 50, 1) 40%,
    rgba(217, 225, 251, 0.2)
  );
  padding: 3.2vw;
  border: none;
  border-radius: 50%;
  color: var(--light);
  transition: transform 0.2s;

  > div {
    width: 60vw;
    height: 60vw;
    background: var(--darker);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .CircularProgressbar {
      width: 60vw;
      height: 60vw;
    }

    .CircularProgressbar-path {
      stroke: var(--${(props) => props.color});
    }

    .CircularProgressbar-trail {
      stroke: var(--darker);
    }

    h1 {
      display: inline-block;
      font-size: 16vw;
    }

    span {
      width: 100%;
      display: inline-block;
      transition: color 0.2s;
    }

    &:hover {
      span {
        color: var(--${(props) => props.color});
      }
    }
  }

  &:active {
    transform: translate(0.2rem, 0.2rem);
  }

  @media (min-width: 768px) {
    padding: 2.4rem;

    > div {
      width: 42rem;
      height: 42rem;

      .CircularProgressbar {
        width: 40rem;
        height: 40rem;
      }

      h1 {
        font-size: 11rem;
      }
    }
  }
`;

export { Counter };
