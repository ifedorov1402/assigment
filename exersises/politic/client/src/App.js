import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Auth from './components/Auth'; // Handles both Login and Signup
import Profile from './components/Profile';
import CreateIssue from './components/CreateIssue';
import { UserContext } from './context/UserProvider';
import UserProvider from './context/UserProvider';

function App() {
  const { token, isLoggedIn } = useContext(UserContext); // Include isLoggedIn from the context

  // A simple function to wrap around protected routes
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/auth" replace />;
  };

  return (
    <UserProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        {/* Use isLoggedIn to conditionally render Profile and CreateIssue routes */}
        {isLoggedIn && (
          <>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateIssue />
                </ProtectedRoute>
              }
            />
          </>
        )}
        {/* Additional protected or public routes can be added here */}
      </Routes>
    </UserProvider>
  );
}

export default App;
