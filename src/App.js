
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navigation from './components/header/Navigation';
import HomePage from './scenes/homePage/HomePage';
import Contact from './scenes/contact/Contact';
import Realisations from './scenes/realisations/Realisations';
import Prestations from './scenes/prestations/Prestations';
import Admin from "./scenes/admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/prestations' element={<Prestations />}/>
            <Route path='/realisations' element={<Realisations />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/admin' element={<Admin />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
