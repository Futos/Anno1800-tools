import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Duden from './pages/Duden/Duden';

import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/duden" component={Duden} />
        <Route exactpath="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
