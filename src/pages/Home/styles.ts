import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0;

  h1 {
    margin: 0 0 6rem 0;
  }

  nav {
    background: var(--darker);
    padding: 0.8rem;
    border-radius: 8rem;

    button {
      background: transparent;
      color: var(--light);
      border: none;
      padding: 1rem 2.4rem;
      border-radius: 8rem;
      font-weight: 700;
    }

    .active {
      background: var(--red);
      color: var(--dark);
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  footer {
    margin: 8rem 0 0 0;

    button {
      border: none;
      background: transparent;
      font-size: 2.4rem;
      color: var(--light);
      opacity: 0.6;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

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
    }
  }

  &:active {
    transform: translate(0.2rem, 0.2rem);
  }
`;

export { Header, Main, Counter };
