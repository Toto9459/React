import './font.css';
import './reset.css'
import { createGlobalStyle } from 'styled-components'
import Navbar from './components/navbar';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    @media (max-width: 1100px) {
      font-size: 50%;
    }
    @media (max-width: 850px) {
      font-size: 40%;
    }
    @media (max-width: 650px) {
      font-size: 30%;
    }
    @media (max-width: 380px) {
      font-size: 20%;
    }
  }
  body {
    background-color: #0D1B2A;
  }
  ::-moz-selection {
    background: #CDEDF6;
    text-shadow: none;
  }
  ::selection {
      background: #CDEDF6;
      text-shadow: none;
  }
  ::-webkit-scrollbar{
      width: 10px;
      background-color: #FAF7EE;
  }
  ::-webkit-scrollbar-thumb{
      background: #D4CEBD;
      border-radius: 15px;
  }

`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
    </div>
  );
}

export default App;
