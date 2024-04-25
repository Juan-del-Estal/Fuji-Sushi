import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Menu } from './Menu';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Fuji-Sushi-Front/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;


