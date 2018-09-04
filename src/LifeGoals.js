import React, { Component } from 'react';

class LifeGoals extends Component {
  constructor(){
    super();
    this.state = {
      currentTextValue: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      currentTextValue : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToLifeGoals(this.state.currentTextValue);
    this.setState({
      currentTextValue: ''
    })
  }

  render(){
    return(
      <div className="goalList">
        <h4>My Goals</h4>
        <form className="goalListForm" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.currentTextValue}/>
          <input type="submit" value="Add My Goal"/>
        </form>
        <ul>
          {this.props.lifeGoals.map((lifeGoal, i) => {
            return (
              <li key={`todo-${i}`}>{lifeGoal}<button onClick={() => this.props.removeItem(i)}><i className="fas fa-times"></i></button></li>
              )
          })}  
        </ul>
      </div>
    )
  }
}

export default LifeGoals;