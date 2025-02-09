import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter'; 
import Todo from './components/Todo';
import Meals from './components/Meals';


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
              </ul>
            </nav>
          </div>
        } />

        {/* Project pages */}
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Meals" element={<Meals />} />
        
      </Routes>
    </Router>
  );
}

export default App;
