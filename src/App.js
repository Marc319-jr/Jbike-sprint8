import './App.scss';
import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Clientes from './pages/Clientes';

import {BrowserRouter as Router ,Route} from 'react-router-dom'

function App() {
  return (
    <Router >
      <div className = "flex">
      <Sidebar />
      
      <div className = "content w-100">
      <NavBar />
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/Sales" component = {Sales} />
        <Route exact path = "/Clientes" component = {Clientes} />
      </div>

      </div>

      </Router>
  );
}

export default App;
