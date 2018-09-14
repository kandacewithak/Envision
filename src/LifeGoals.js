import React, { Component } from 'react';

class LifeGoals extends Component {
  constructor(){
    super();
    this.state = {
      currentTextValue: "",
      modalActive: false
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

  openModal = () => {
    this.setState({ modalActive: true })
  }

  closeModal = () => {
    this.setState({ modalActive: false })
  }

  render(){
    return(
      <div>
        <div className="modal2">
        
        {this.state.modalActive && (
          <div className='modalInfo2'>
            <a title='Close' onClick={this.closeModal}><i class="fas fa-times-circle"></i></a>
            <p>This is a spot for you to write a more concrete goal that you are striving to achieve.  You could write anything from drinking eight glasses of water a day, to getting a deserved promotion at work.  Once you attain your goal, you are able to delete it from your list!</p>
          </div>
        )}
        </div>
        <div className="goalList">
          <button className="modalButton2" onClick={this.openModal}>?</button>
          <h4>Goals to Focus On:</h4>
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
      </div>
    )
  }
}

export default LifeGoals;