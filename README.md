Explaination about how to set up, run and use the API.
Using POSTMAN,
Send a POST request to 
<!-- "https://sechngx.onrender.com/api" -->

In the format
{
  "name": "Mark Essien" //NOTE-name can be dynamic
}
You will get a response in this format:
<!-- {
    "_id": "",    //a unique id will be passed here
    "name": "Mark Essien",
    "__v": 0
} -->

Using your Browser,
To ensure its sending to the Database(MONGODB)
Copy the unique id from POSTMAN
Open your Browser and paste the link below:
<!-- "https://sechngx.onrender.com/api/user_id" -->

Right in your browser,you will get a response in the format
<!-- {
    "_id": "",    //the same unique id will be found here
    "name": "Mark Essien",
    "__v": 0
} -->
