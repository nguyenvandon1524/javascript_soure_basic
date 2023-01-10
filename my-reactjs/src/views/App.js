import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import MyComponent2 from './Example/MyComponent2';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import { Route } from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/abouts">
              <MyComponent2 />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>

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
    </BrowserRouter>
  );
}

export default App;
