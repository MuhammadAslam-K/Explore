import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home_post from './Home_post';
import View from './Components/View/View';
import Creater from './Components/Creater/Creater';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/postContext';

function App() {
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div className="App">
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home_post />
          </Route>
          <Route exact path='/login' >
            <Login />
          </Route>
          <Route exact path='/signup' >
            <Signup />
          </Route>
          <Route exact path='/view' >
            <View />
          </Route>
          <Route exact path='/creater' >
            <Creater />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
