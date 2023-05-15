import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./Page/Home"
import Test from "./Page/Test";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
