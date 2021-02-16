import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './assets/styles/_main.scss'

import Home from './pages/Home/Home'
import Gebaeude from './pages/Gebaeude/Gebaeude'
import Bauer from './pages/Bauer/Bauer'

function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/gebaeude' component={Gebaeude} />
          <Route exact path='/' component={Home} />
          <Route path='/bauer' component={Bauer} />
        </Switch>
      </Router>
    </>
  )
}

export default App
