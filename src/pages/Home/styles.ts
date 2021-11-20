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
      transition: color 0.2s;

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

export { Header, Main };
