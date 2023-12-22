import Header from "./components/1 Header/Header.js";
import Main from "./components/2 Main/Main.js";
import Footer from "./components/3 Footer/Footer.js";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
