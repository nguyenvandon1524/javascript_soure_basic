import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import MyComponent2 from './Example/MyComponent2';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World With React.js
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent />
        <MyComponent2 />
      </header>
      <footer>
        <img src={logo} alt="logo"></img>
      </footer>
    </div>
  );
}

export default App;
