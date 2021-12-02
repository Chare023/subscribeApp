import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      email:''
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  
  onSubmit(event) {
    event.preventDefault()

    const registered = {
      email: this.state.email
    }

    axios.post('http://localhost:4000/app/signup', registered)
      .then(response => console.log(response.data))

    this.setState({
      email: ''
    })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='form-div'>
            <form onSubmit={this.onSubmit}>
              <input 
              label = 'Email'
              type = 'text'
              placeholder= 'E-mail'
              onChange={this.changeEmail}
              value={this.state.email}
              className='form-control form-group mt-5'
              />
              <input type='submit' className='btn btn-danger btn-block mt-3' value='Subscribe' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;