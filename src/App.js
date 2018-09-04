import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Form from './Form';
import DisplayGoals from './DisplayGoals';
import DisplayPhotos from './DisplayPhotos';
import LifeGoals from './LifeGoals';
import PopUp from './PopUp';


const apiKey = "9952551-fdf4e3a072f774afc9795c7e8"
const url = "https://pixabay.com/api/"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      goalsList: {},
      goalsPhotos: [],
      showForm: true,
      lifeGoals: []
    }
    this.removeItem = this.removeItem.bind(this);
  }
  goalsToArray = (object) => {
    const goalsArray  = Object.values(object);
    const newGoalsArray = goalsArray.filter(goal => (goal !== true));
    
    const imageRequests = newGoalsArray.map((goal) => {
      return axios.get(url, {
        params: {
          key: apiKey,
          q: goal,
        }
      });
  });
  Promise.all(imageRequests).then((res) => {
    this.sortURLS(res)
    }
  )
  }
  sortURLS = (results) => {
      const resultArray = results.map((item) => {
        const randomNumber = this.numberGenerator(item.data.hits);
        return item.data.hits[randomNumber].largeImageURL;
      })
      this.setState({
        goalsPhotos: resultArray
      })
  }
  numberGenerator = (array) => {
    return Math.floor(Math.random() * array.length);
  }
  changeFormState = (newState) => {
    this.setState({
      showForm: newState
    })
    console.log(newState)
  }
  addGoals = (goalsObject) => {
    this.goalsToArray(goalsObject)
    this.setState({
      goalsList: goalsObject
    })
  }
  addToLifeGoals = (lifeGoal) => {
    const lifeGoals = this.state.lifeGoals;
    lifeGoals.push(lifeGoal);
    this.setState({
      lifeGoals: lifeGoals
    })
  }  
  removeItem (index) {
    const lifeGoals = this.state.lifeGoals;
    lifeGoals.splice(index, 1)
    this.setState({
      lifeGoals: lifeGoals
    })

  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>My Vision Board</h1>
        </header>
        <PopUp />
        <Form addGoals={this.addGoals} changeFormState={this.changeFormState}/>
        <DisplayGoals listOfGoals={this.state.goalsList} />
        <DisplayPhotos photoArray={this.state.goalsPhotos}/>
        {this.state.showForm ? null : <LifeGoals addToLifeGoals={this.addToLifeGoals} lifeGoals={this.state.lifeGoals} removeItem={this.removeItem} />}
      </div>
    );
  }
}

export default App;



// VISION BOARD APP
// choose four main areas of focus/things you'd like to focus on for the vision board: happiness, travel, love, accomplish
// those four key words or phrases will be placed on the vision board in a specific spot
// choose four photos using the Pixabay API using key word search from the four key words/phrases on the vision boaard
// the four photos will be placed/matched according to the key word used
// create a goal list that can be updated or changed




// componentDidMount(){
//   firebase.auth().signInAnonymously().catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       console.log(user);
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       // ...
//       console.log(isAnonymous);
//       console.log(uid);
//     } else {
//       // User is signed out.
//       // ...
//     }
//     // ...
//   });
  
// }
