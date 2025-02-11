import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter'; 
import Todo from './components/Todo';
import Meals from './components/Meals';
import Calculator from './components/Calculator';


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
              </ul>
            </nav>
          </div>
        } />

        {/* Project pages */}
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Meals" element={<Meals />} />
        <Route path="/Calculator" element={<Calculator />} />
        
      </Routes>
    </Router>
  );
}

export default App;
