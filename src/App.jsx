import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import State from "../src/pages/learn-useState/index";
import Effect from "../src/pages/learn-useEffect/index";
import Context from "../src/pages/learn-useContext/index";
import Tugas from "../src/pages/tugas/index";

function App() {
  return (
    <div className="Main">
      <Router>
      <div class="btn-group">
          <a href="/use-state" class="btn btn-primary">Use State</a>
          <a href="/use-effect" class="btn btn-primary">Use Effect</a>
          <a href="/use-context" class="btn btn-primary">Use Context</a>
          <a href="/tugas" class="btn btn-primary">Tugas</a>
          </div>
        <Routes>
          <Route path="/use-state" exact element={<State />}></Route>
          <Route path="/use-effect" exact element={<Effect />}></Route>
          <Route path="/use-context" exact element={<Context />}></Route>
          <Route path="/tugas" exact element={<Tugas />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
