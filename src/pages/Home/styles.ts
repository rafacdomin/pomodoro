import styled from 'styled-components';

interface CustomProps {
  font: string;
}

const Header = styled.header<CustomProps>`
  font-family: ${(props) => props.font};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;

  h1 {
    font-size: 2.4rem;
    margin: 0 0 3rem 0;
  }

  nav {
    background: var(--darker);
    padding: 0.8rem;
    border-radius: 8rem;

    button {
      background: transparent;
      color: var(--light);
      border: none;
      padding: 1rem 1.2rem;
      border-radius: 8rem;
      font-weight: 700;
      transition: color 0.2s;
      font-size: 1.2rem;

      &:hover {
        color: var(--${(props) => props.color});
      }
    }

    .active {
      background: var(--${(props) => props.color});
      color: var(--darker);

      &:hover {
        color: var(--darker);
      }
    }
  }

  @media (min-width: 768px) {
    margin: 6rem 0;

    h1 {
      font-size: 3.2rem;
      margin: 0 0 6rem 0;
    }

    button {
      padding: 1rem 2.4rem;
      font-size: 1.6rem;
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  footer {
    margin: 6rem 0 0 0;

    button {
      border: none;
      background: transparent;
      font-size: 1.8rem;
      color: var(--light);
      opacity: 0.6;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }

    @media (min-width: 768px) {
      margin: 8rem 0 0 0;
      font-size: 2.4rem;
    }
  }
`;

export { Header, Main };
