import './App.css';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<h1>Login page</h1>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
