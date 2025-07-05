import React, { Component } from 'react'

export default class Navbar extends Component {
  render(props) {
    return (
      <nav className="navbar bg-dark fixed-top"  >
        <div className="container-fluid">
            <a className="navbar-brand " style={{color: 'white'}}>NewsMonkey</a>

            <li className="d-flex justify-content-center">

            <button type="button" className={`btn ${this.props.currentCategory === 'general' ? 'active' : ''}`} data-bs-toggle="button" style={{color: 'white'}} onClick={() => {this.props.changeCategory('general')
            }} >General</button>

            <button type="button" className={`btn ${this.props.currentCategory === 'business' ? 'active' : ''}`} data-bs-toggle="button" style={{color: 'white'}} onClick={() => {this.props.changeCategory('business')
            }} >Business</button>

            <button type="button" className={`btn ${this.props.currentCategory === 'entertainment' ? 'active' : ''}`} data-bs-toggle="button" style={{color: 'white'}} onClick={() => this.props.changeCategory('entertainment')} >Entertainment</button>

            <button type="button" className={`btn ${this.props.currentCategory === 'technology' ? 'active' : ''}`} data-bs-toggle="button" style={{color: 'white'}} onClick={() => this.props.changeCategory('technology')} >Technology</button>

            <button type="button" className={`btn ${this.props.currentCategory === 'health' ? 'active' : ''}`} data-bs-toggle="button" style={{color: 'white'}} onClick={() => this.props.changeCategory('health')} >Health</button>

            <button type="button" className={`btn ${this.props.currentCategory === 'science' ? 'active' : ''}`} data-bs-toggle="button" style={{color: 'white'}} onClick={() => this.props.changeCategory('science')} >Science</button>

            <button type="button" className={`btn ${this.props.currentCategory === 'sports' ? 'active' : ''}`} data-bs-toggle="button" style={{color: 'white'}} onClick={() => this.props.changeCategory('sports')} >Sports</button>

            </li>

            
        </div>
        
      </nav> 
    )
  }
}
