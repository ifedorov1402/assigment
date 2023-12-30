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


#status codes:
    -200  -succsesful request
    -201 - successful Insert / Upsate
    -401 - Unauthorized 
    -404 - Not found
    -500 - Server Error





    function extractUniqueCharacters(strings) {
    // Join all strings into a single string
    const combinedString = strings.join('');

    // Create a new Set from the combined string to get unique characters
    const uniqueCharacters = new Set(combinedString);

    // Convert the Set back to an array and return it
    return Array.from(uniqueCharacters).sort();
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'b', 'c', 'e', 'h', 'l', 'n', 'p', 'r', 'y']



function sortByProperty(objects, propertyName) {
    // Create a new array from the input array
    return objects.slice().sort(function(a, b) {
        // Compare the property values of each object
        if (a[propertyName] < b[propertyName]) {
            return -1;
        }
        if (a[propertyName] > b[propertyName]) {
            return 1;
        }
        return 0;
    });
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);


# intoduction to Mongoose 
    #npm install mongoose
    #Purpose
        - Create Models
        - Query Data 
    #Content 

mangoose.connect('mongodb://localhost:27017/moviesdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false

    },
    )