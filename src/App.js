import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Schedule from './2016GiantsSchedule.json';

class App extends Component {
    constructor(){
        super();
        this.today = this.convertDate();
        this.allHomeGames = Schedule.games.filter(this.getHomeGames);
        this.todaysHomeGame = this.getTodaysHomeGame(this.allHomeGames);
    }

    convertDate(){
        let today = new Date(Date.now());
        let mm = today.getMonth() + 1;
        mm = (mm<10) ? '0' + mm : mm;
        let dd = today.getDay();
        dd = (dd<10) ? '0' + dd : dd;
        let yy = today.getFullYear();
        let convertedDate = mm + '/' + dd + '/' + yy;
        return convertedDate;
    }

    getHomeGames(currentGame){
        if(currentGame.location === "AT&T Park"){
            return true;
        }else {
            return false;
        }
    }

    getTodaysHomeGame(currentGames){
        let currentGame;
        for(let i=0; i < currentGames.length; i++){
            console.log(currentGames[i].date, "-----", this.today);
            if (currentGames[i].date === this.today){
                currentGame = currentGames[i];
            }
        }
        if(currentGame){
            return currentGame;
        } else {
            return "No Giant's game today!"
        }
    }

    render() {
        return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            {this.todaysHomeGame}
        </p>
      </div>
    );
    }
}

export default App;
