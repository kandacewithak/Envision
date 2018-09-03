import React, { Component } from 'react';

class PopUp extends Component {
    constructor (props) {
      super(props)
      this.state = { modalActive: false }
    }
  
    openModal = () => {
      this.setState({ modalActive: true })
    }
  
    closeModal = () => {
      this.setState({ modalActive: false })
    }
  
    render () {
      return (
        <div className="modal">
          <button className="modalButton" onClick={this.openModal}>?</button>
          {this.state.modalActive && (
            <div className='modalInfo'>
              <a title='Close' onClick={this.closeModal}><i class="fas fa-times-circle"></i></a>
              <h2>What is a Vision Board?</h2>
              <p>A vision board is a space to bring your focuses, goals, and visions together so that they are accessible to you when you would like to look at or think about them.  Visualization is an effective method of bringing your thoughts into reality. For your virtual vision board, you can choose four areas of focus that you would like to center your visualization around.  Let's get started!</p>
            </div>
          )}
        </div>
      )
    }
  }
  
export default PopUp;

