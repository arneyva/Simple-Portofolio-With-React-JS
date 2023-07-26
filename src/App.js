import logo from './logo.svg';
// setelah intsall bootsrap perlu mengimport bootsrap css nya
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills} from './components/Skills';
import { Projects} from './components/Projects';
import { Footer} from './components/Footer';
import { Contact} from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
