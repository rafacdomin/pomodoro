import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IConfigContext {
  pomodoro: number;
  long: number;
  short: number;
  font: string;
  color: string;
  saveConfig(): void;
}

const ConfigContext = createContext<IConfigContext>({} as IConfigContext);

const ConfigProvider: React.FC = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(25);
  const [short, setShort] = useState(5);
  const [long, setLong] = useState(15);
  const [font, setFont] = useState('Poppins');
  const [color, setColor] = useState('red');

  const loadConfig = useCallback(() => {
    const storageConfig = localStorage.getItem('config');

    if (storageConfig) {
      const config = JSON.parse(storageConfig);

      setPomodoro(config.pomodoro);
      setShort(config.short);
      setLong(config.long);
      setFont(config.font);
      setColor(config.color);
    }
  }, []);

  const saveConfig = useCallback(() => {
    const config = {
      pomodoro,
      short,
      long,
      font,
      color,
    };

    localStorage.setItem('config', JSON.stringify(config));
  }, [pomodoro, short, long, font, color]);

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  return (
    <ConfigContext.Provider
      value={{
        pomodoro,
        short,
        long,
        font,
        color,
        saveConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

function useConfig() {
  const context = useContext(ConfigContext);

  return context;
}

export { ConfigContext, ConfigProvider, useConfig };
