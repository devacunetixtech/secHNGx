// Link to the UML
<!-- https://drive.google.com/file/d/1GcEmwJPnRVXMu29uLHU-wsROctSdsNWL/view?usp=sharing -->

Standard formats for requests and responses for each endpoint.
For POST request:
<!-- {
  "name": "Mark Essien" //NOTE-name can be dynamic
}
POST Response:
{
    "_id": "",    //unique id will be passed here
    "name": "Mark Essien",
    "__v": 0
} -->
For GET REQUEST:
<!-- https://sechngx.onrender.com/api/user_id
GET RESPONSE:
{
    "_id": "",    //unique id will be passed here
    "name": "",   //name attached to id here
    "__v": 0
}
For PUT REQUEST:
https://sechngx.onrender.com/api/user_id
PUT RESPONSE:
{
    "name": "Mark",   //new name you want to update old name to
}
For DELETE REQUEST:
https://sechngx.onrender.com/api/user_id -->
DELETE RESPONSE:
The name attached to this id will get deleted in the database,if you try to GET REQUEST it,an error willl occur.


Sample usage of the API, including example requests and expected responses.
<!-- {
  "name": "Mark Essien" //NOTE-name can be dynamic
} -->
POST Response:
<!-- {
    "_id": "6644u72hd834hsd8sdhs8",    //unique id will be passed here
    "name": "Mark Essien",
    "__v": 0
} -->
 
Instructions for setting up and deploying the API locally or on a server.
A. Running the Application:
To run the application, ensure you have set the required environment variables, installed the dependencies, and started the server. The server will listen on the specified port, and you can make HTTP requests to interact with the API.
B. For the env
    <!-- "
    require("dotenv").config()
    const uri = process.env.ATLAS_URI;
    "
    - `ATLAS_URI`: "your connection string goes here" -->
C. Server Configuration
  The Express.js server is configured to listen on a specified port. The port can be defined as an environment variable (`PORT`) or  defaults to port 5000 if not specified.
  <!-- "
   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
   });
  " -->
D. Recommendations:
- Use appropriate security measures, such as input validation and authentication, to secure your API.
- Ensure that your MongoDB Atlas cluster is properly configured and your IP address is whitelisted.
- Implement logging and error monitoring to track and handle issues in production.
- Customize the data model and routes to fit the requirements of your application.

DOCUMENTATION
1.Node.js Express API with MongoDB
A Node.js application that creates a RESTful API using the Express.js framework to perform CRUD (Create, Read, Update, Delete) operations on a MongoDB database. The application allows you to interact with a collection of "persons", where each person has a name.

2. Dependencies
- Express.js: web framework for Node.js used to handle HTTP requests and routes.
- Mongoose: An Object Data Modeling (ODM) that simplifies database interactions in Node.js.
- body-parser: A middleware for Express.js that parses incoming request bodies.

3. Configuration
Requires certain environment variables to be set, and these are typically defined in a `.env` file. The `dotenv` package is used to load these environment variables from the `.env` file.

4. MongoDB Connection
The application establishes a connection to a MongoDB database using Mongoose.
<!-- "
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
" -->

6. Error Handling
The application includes error handling as it responds with appropriate HTTP status codes and error messages in JSON format.
