import React, { Component } from 'react'
import Navbar from "./Components/Navbar.js";
import News from "./Components/News.js";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  state = {
    category: '',
    progress: 0,
  }

  changeProgress = (progress) => {
    this.setState({
      progress: progress,
    })
  }

  changeCategory = (category) => {
    this.setState({
      category: category
    })
  }

  render() {
    return (
      <>
        <Navbar changeCategory={this.changeCategory} currentCategory={this.state.category} />

        <div>
          <LoadingBar
            color="#f11946"
            progress= {this.state.progress}
            onLoaderFinished={() => this.changeProgress(0)}
          />
        </div>

        <News currentCategory={this.state.category} changeProgress={this.changeProgress} />
      </>
    )
  }
}

