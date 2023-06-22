import Main from "./pages/main";
import Detail from "./pages/detail";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./css/App.css";

function App() {
  let navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">

        <div className="navbar_logo" onClick={() => { navigate('/main') }}>
          <h4>myStock</h4>
        </div>
        <ul className="navbar_menu">
          <li>night mode</li>
          <li>user</li>
        </ul>

      </nav>
      <Routes>
        <Route path="/main" element={<div><Main /></div>} />
        <Route path="/detail" element={<div><Detail /></div>} />
      </Routes>
    </div>);
}

export default App;
