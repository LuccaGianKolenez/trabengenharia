import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from './components/TopBar';
import Routes from './routes';
import './App.css';

const App: React.FC = () => (
  <Router basename={'/oficina'} >
      <TopBar />
          <Routes />
  </Router>
) 

export default App;
