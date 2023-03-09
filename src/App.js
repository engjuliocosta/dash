import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this);
    this.state = {
      name: 'Julio Costa'
    };
}

handlePClick() {
  console.log('<p> clicado');
}

render() {
  const { name } = this.state
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'></img>
        <p onClick={this.handlePClick}>
          {name}
        </p>
        <a 
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  )
}

export default App;
