import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      focusOne: "",
      focusTwo: "",
      focusThree: "",
      focusFour: "",
      showForm: true
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGoals(this.state);
    this.setState({
      showForm: false
    })
      this.props.changeFormState(false);
      // set state is not changing the state in the prop but is working because the form does not display
  }
  render(){
    return (
      <div>
        <section className="intro">
          <form style={{display: this.state.showForm ? 'block' : 'none' }} className="firstForm" onSubmit={this.handleSubmit}>
            <h2>Choose four areas of focus for your Vision Board</h2>
            <label htmlFor="focusOne"></label>
            <input onChange={this.handleChange} type="text" id="focusOne" name="focusOne" placeholder="Try something like 'happiness' or 'success...'" required/>
            <label htmlFor="focusTwo"></label>
            <input onChange={this.handleChange} type="text" id="focusTwo" name="focusTwo" required/>
            <label htmlFor="focusThree"></label>
            <input onChange={this.handleChange} type="text" id="focusThree" name="focusThree" required/>
            <label htmlFor="focusFour"></label>
            <input onChange={this.handleChange}type="text" id="focusFour" name="focusFour" required/>
            <input type="submit" value="Create My Vision Board"/>
          </form>
        </section>
      </div>
    );
  }
}

export default Form;