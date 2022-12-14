import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About';
import Error from './pages/Error';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Error/>}/>
        <Route path="/blog" element ={<Blog/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
