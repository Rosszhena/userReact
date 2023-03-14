import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsrList from './UsrList';
import User from './User';

function App() {
  return (
    <div className="App">
   <h1>React Js CRUD</h1>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<UsrList />}> </Route>
      <Route path='/user/details/:id' element={<User />}></Route>
  
    </Routes> 
  </BrowserRouter>
    </div>
  );
 
}

export default App;
