import React from 'react';
import { Router, Route, Switch, HashRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import LeaderboardView from './components/leaderboard';
import LeaderboardDashboard from './components/leaderboardDashboard';
import Login from './components/login';
import Register from './components/register';
import Index from './components';
import Home from './components/home';
import Wallet from './components/wallet';
import MainComponent from './components/main'
import history from './history'
import PVPHome from './components/pvpHome';
import pvpGame from './components/pvpGame';
import PVPTikTocToeGame from './components/tiktoctoe';
import {Container} from 'react-bootstrap';
import HeaderComponent from './components/header';
import GamesView from './components/gamesView';



function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL+"/"} history={history}>
      <HeaderComponent />
      <Container>
       <Switch>
        <Route path="/login" component={Login} />  
        <Route path="/register" component={Register} />  
        <Route path="/logintest/:type" exact component={MainComponent} />
        <Route path="/home" extact component={Home} />
        <Route path="/wallet" extact component={Wallet} />
        <Route path="/pvp/:game" extact component={PVPHome} />
        <Route path="/highscore" extact component={pvpGame} />
        <Route path="/tictactoe" extact component={PVPTikTocToeGame} />
        <Route path="/games" extact component={GamesView} />
       </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
