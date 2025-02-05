
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RetrievePage from './RetrievePage';
import './App.css'

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Add User</Link></li>
                    <li><Link to="/retrieve">Retrieve Data</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/retrieve" element={<RetrievePage />} />
            </Routes>
        </Router>
    );
};

export default App;
