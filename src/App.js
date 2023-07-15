import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Onboarding from "./Pages/Onboarding";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./index.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/dashboard"} element={<Dashboard/>}/>
        <Route path={"/onboarding"} element={<Onboarding/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
