import { Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import CreateDriver from './pages/CreateDriver'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-driver" element={<CreateDriver />} />
      </Routes>
    </div>
  );
}

export default App;
