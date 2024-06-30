import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NovoVideo from './Pages/NovoVideo';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/novovideo" element={<NovoVideo />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
