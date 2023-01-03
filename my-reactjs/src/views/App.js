import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import MyComponent2 from './Example/MyComponent2';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo App With React.js
        </p>
        {/* <MyComponent />
        <MyComponent2 /> */}
        <ListTodo />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <footer>
        <img src={logo} alt="logo"></img>

      </footer>


    </div>
  );
}

export default App;
