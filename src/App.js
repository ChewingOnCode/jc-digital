import "./App.css";

import Home from "./Components/Home/Home";
import { Route } from "react-router";

function App() {
  return (
    <div className='App'>
      <Route path='/' element={<Home />} />
    </div>
  );
}

export default App;
