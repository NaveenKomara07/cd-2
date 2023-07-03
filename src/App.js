import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/header" component={Header} />
      <Route exact path="/" component={Home} />
      <NotFound />
    </Switch>
  </BrowserRouter>
)

export default App
