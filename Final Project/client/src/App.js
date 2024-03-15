import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from './context/UserProvider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewsFeed from './components/NewsFeed';
import Favorites from './components/Favorites';
import Auth from './components/Auth'; // Assuming this is your login/signup component
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'

export default function App() {
  const { token, logout } = useContext(UserContext);

  return (
    
      <div className="app">
        {token && <Navbar logout={logout}/>}
        <Routes>
          <Route path="/" element={
          <ProtectedRoute token={token} redirectTo="/auth">
          <Home />
        </ProtectedRoute>
          } />
          <Route path="/news" element={
              <ProtectedRoute token={token} redirectTo="/auth">
                 <NewsFeed />
              </ProtectedRoute>
        } />
          <Route 
            path="/favorites" 
            element={
              <ProtectedRoute token={token} redirectTo="/auth">
                <Favorites />
              </ProtectedRoute>
            } 
          />
          <Route path="/auth" element={!token ? <Auth /> : <Navigate to="/news" />} />
        </Routes>
      </div>
  );
}




// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
        
//         <Route path="/" element={<Home />} />
//         <Route path="/news" element={<NewsFeed />} />
//         <Route path="/favorites" element={<Favorites />} />
        
//       </Routes>
//       <footer>
//         <p>© 2024 News Portal. All rights reserved.</p>
//         <p>Contact: info@newsportal.com</p>
//       </footer>
//     </Router>
//   );
// };