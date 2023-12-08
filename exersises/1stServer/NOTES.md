# intro to Express
 1. npm init -y 
 2. npm install express


#Vocabulary

#roiute 
 * an event listener for http requests 
#port 
 *"/item"  "/user"

*EndPoint
* localHost: 9000 /


# Nodemon

* npm install -g nodemon


#Rest API architectrire 

#Rest - representation state transfer 

#Resourse - single item in data base
/user

#Collection  - collection of the similar items
/users


#Base (root) URL  - Http://amazon.com/

#API Endpoint  - http://amazon.com/movies

# Paraments - /movies/:movieId

#Query (query string) -/movies?genre=action&year=1999

#client - Front end 

# Server - Intermediary

# Request methods: = CRUD - GER PEST PUT DELETE


#Middleware - a function that fire in between

Request Body (req.body)



# UUID - creates unique IDs

-npm install uuid


#Express Router - Enables to modularize our routes in express

#Modular file organization - 


#Middlewere
 - WWhat is it ?
    1.app.use()
        -(optional) -  Mouth path (endpoint )
        -2. Callback Function - recive the request, respose, also the "next" function 

    2. The "next" function 
        * moves on to the middleware in line on our server 


# Console errors in Express

    #Use a Logger
        *npm install morgan


#connection the Front-end to the back End

                npx create-react-app .      
    #folder Structure

    #Proxy

    package/json - >  "proxy": "http://localhost:9000"



1) npm install axios  -> into client folder 