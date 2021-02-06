import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/styles/_main.scss';

import Home from './pages/Home/Home';
import Duden from './pages/Duden/Duden';
import Bauer from './pages/Bauer/Bauer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/duden" component={Duden} />
        <Route exact path="/" component={Home} />
        <Route path="/bauer" component={Bauer} />
      </Switch>
    </Router>
  );
}

export default App;
