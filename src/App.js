import Home from './components/Home';
import AddUser from './components/AddUser'
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/add-user' element={<AddUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
