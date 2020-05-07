import React from 'react';
import './App.css';
import Navi from "./React/navigation/Nav";
import {Route,Switch} from "react-router-dom"
import About from "./React/Componets/About";
import Contact from "./React/Componets/Contact";
import Cv from "./React/Componets/CV";
import FootballTeam from "./React/Componets/Messages";
import Heritage from "./React/Componets/Heritage";
import Login from "./React/Componets/Login";
import MyCity from "./React/Componets/MyCity";
import Footer from "./React/Componets/Footer";



function App() {
  return (
    <div>
        <Navi/>
        <Switch>
            <Route path={"/"} exact component={About}/>
            <Route path={"/cv"} exact component={Cv}/>
            <Route path={"/mycity"} exact component={MyCity}/>
            <Route path={"/heritage"} exact component={Heritage}/>
            <Route path={"/myteam"} exact component={FootballTeam}/>
            <Route path={"/contact"} exact component={Contact}/>
            <Route path={"/login"} exact component={Login}/>
        </Switch>
        <Footer/>
    </div>

  );
}

export default App;
