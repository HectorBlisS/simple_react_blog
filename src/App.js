import React, {Fragment} from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from './components/common/NavBar';

function App() {
  return (
    <Fragment>
        <NavBar/>
        <Routes/>
    </Fragment>
    
  );
}

export default App;
