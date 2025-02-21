import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter'; 
import Todo from './components/Todo';
import Meals from './components/Meals';
import Calculator from './components/Calculator';
import ColorTogle from './components/ColorTogle';
import HiddenSearch from './components/HiddenSearch';


function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={
          <div>
            <h1>Welcome to my small projects!</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/Counter">Counter</Link>
                </li>
                <li>
                  <Link to="/Todo">Todo</Link>
                </li>
                <li>
                  <Link to="/Meals">Meals</Link>
                </li>
                <li>
                  <Link to="/Calculator">Calculator</Link>
                </li>
                <li>
                  <Link to="/ColorTogle">ColorTogle</Link>
                </li>
                <li>
                  <Link to="HiddenSearch">HiddenSearch</Link>
                </li>
              </ul>
            </nav>
          </div>
        } />

        {/* Project pages */}
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Meals" element={<Meals />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/ColorTogle" element={<ColorTogle />} />
        <Route path="/HiddenSearch" element={<HiddenSearch/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
