import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import GlobalStyle  from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";
import { HeroSection } from "./components/HeroSection/HeroSection";
import LiveResult from "./components/LiveResults/LiveResults";


function App() {
  const [theme, setTheme] = usePersistedState('theme', light);
  const toggleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Navbar toggleTheme={toggleTheme}></Navbar>
      <HeroSection></HeroSection>
      <LiveResult></LiveResult>
    </ThemeProvider>
  </>
  );
}

export default App;
