import React, { useState, createContext } from "react";
import axios from 'axios';

export const UserContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        errMsg: ""
    };

    const [userState, setUserState] = useState(initState);
    const [favorites, setFavorites] = useState([]);


    function signup(credentials) {
        axios.post("/api/users/signup", credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }));
            })
            .catch(err => handleAuthErr(err.response.data.errMsg));
    }

    function login(credentials) {
        axios.post("/api/users/login", credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }));
            })
            .catch(err => handleAuthErr(err.response.data.errMsg));
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUserState({
            user: {},
            token: "",
        });
    }

    function handleAuthErr(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }));
    }

    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }));
    }

    const fetchFavorites = async () => {
        try {
            const response = await userAxios.get('/api/favorites');
            setFavorites(response.data);
        } catch (err) {
        }
    };
// Add Favorites 

    const handleFavoriteClick = async (article) => {
        try {
            const favoriteData = {
                articleId: article.article_id, 
                title: article.title,
                description: article.description,
                url: article.link,
                imageUrl: article.image_url,
                publishedAt: article.pubDate 
            };
            await userAxios.post('/api/favorites', favoriteData);
            console.log('Article added to favorites:', article.title);
        } catch (error) {
            console.error('Error adding article to favorites:', error);
        }
    };

 // Delete Favorites

     const handleDeleteFavorite = async (id) => {
        try {
            await userAxios.delete(`/api/favorites/${id}`);
            setFavorites(favorites.filter(fav => fav._id !== id));
        } catch (error) {
            console.error('Error deleting favorite:', error);
        }
    };
    


    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            resetAuthErr,
            fetchFavorites,
            favorites,
            handleFavoriteClick,
            handleDeleteFavorite
        }}>
            {props.children}
        </UserContext.Provider>
    );
}
