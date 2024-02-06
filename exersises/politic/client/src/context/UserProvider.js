import React, { useState, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext();

// Axios instance specifically for requests needing authentication
const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userState, setUserState] = useState({
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        issues: [] // Assuming you want to manage issues within user state
    });

    // Handling signup
    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }));
            })
            .catch(err => console.error(err.response.data.errMsg)); // Enhance by setting an error state
    }

    // Handling login
    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }));
                setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
                fetchUserIssues(); // Fetch user-specific issues upon login
            })
            .catch(err => console.error(err.response.data.errMsg)); // Enhance by setting an error state
    }

    // Handling logout
    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUserState({
            user: {},
            token: '',
            issues: []
        });
    }

    // Fetching user-specific issues
    function fetchUserIssues() {
        userAxios.get('/api/issues/user')
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }));
            })
            .catch(err => console.error(err));
    }

    // Adding a new issue
    function addIssue(newIssue) {
        userAxios.post('/api/issues', newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }));
            })
            .catch(err => console.error(err));
    }

    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            addIssue,
            fetchUserIssues
        }}>
            {children}
        </UserContext.Provider>
    );
}
