import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
