import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Header from './components/header'
import NotFound from './views/notfound';

import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState({
    user: null
  });

  useEffect(() => {
    getUser('https://api.github.com/users/marisleidis84')

    return () => {

    }
  }, [])

  // const getUser = url => {
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     setState({
  //       ...state,
  //       user: data
  //     })
  //   })
  // }

  const getUser = async (url) => {
    try {
    const resp = await fetch(url)
    const data = await resp.json();
      setState({
        ...state,
        user: data
      })
    }catch(error){
      console.error(error.message);
    }
  }

  

  return (
    <>
      <BrowserRouter>
        <Header user = {state.user}/>
        <div className='main-wrapper'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
