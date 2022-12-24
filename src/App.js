import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home_post from './Home_post';
import View from './Components/View/View';
import Creater from './Components/Creater/Creater';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route exact path='/home'>
        <Home_post/>
        </Route>
        <Route exact path='/login' >
        <Login/>
        </Route>
        <Route exact path='/signup' >
        <Signup/>
        </Route>
        <Route exact path='/view' >
        <View/>
        </Route>
        <Route exact path='/creater' >
        <Creater/>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
