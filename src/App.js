import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    // Inject optimised version of image for screensize
    this.node.style['background-image'] = `url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?dpr=2&auto=format&fit=crop&w=${window.innerWidth}&h=${window.innerHeight}&q=80&cs=tinysrgb&crop=')`
  }

  render() {
    return (
      <div className="App" ref={ref => this.node = ref}>
        <div className="App__overlay"></div>
        <h1>Welcome! Let's learn some React ⚛️</h1>
      </div>
    );
  }
}

export default App;
