import './App.css'

import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'
import JobsItemDetails from './components/JobsItemDetails'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path='/login' component={LoginForm} />
    <ProtectedRoute exact path='/' component={Home} />
    <ProtectedRoute exact path='/jobs' component={Jobs} />
    <ProtectedRoute exact path='/jobs/:id' component={JobsItemDetails} />
    <Route path='/not-found' component={NotFound} />
    <Redirect to='not-found' />
  </Switch>
)

export default App
