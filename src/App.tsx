import { ConfigProvider } from './hooks/config';
import { Home } from './pages/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ConfigProvider>
      <GlobalStyle />
      <Home />
    </ConfigProvider>
  );
}

export default App;
