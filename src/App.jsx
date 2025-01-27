import React from 'react';
import Counter from './components/Counter'; 

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';// Correct path to Counter component

function App() {
  return (
    <Router>
    <div>
      
        <div><h1>Welcome to my small projects!</h1></div>
        <nav>
          <ul>
            <li>
              <Link to="/Counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/Counter' element={<Counter />}></Route>
        </Routes>
      

      
    </div>
    </Router>
  );
}

export default App;
