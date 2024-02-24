import "./App.css";
import GlobalStyle  from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  const [theme, setTheme] = usePersistedState('theme', light);
  const toggleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MainPage toggleTheme={toggleTheme} />}
          />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </>
  );
}

export default App;
