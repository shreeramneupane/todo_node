# Use MongoDB

* Introduce **mongoose**

  Explore [mongoose going to this link](http://mongoosejs.com/docs).
  
  * install *mongoose* module
  * use *mongoose* module **connect** to establish connection with MongoDB database
    
    `todo_development` is the MongoDB database, It can be accessed with `mongodb://localhost/todo_development`

* Let's save user's name in database in collection **users**
  
  * create a users schema
  * save the user's name from the post routes, here routes name is */hello*
    * export the **User** model and use it in **app.js**
    * inside the route, create new object of **User** model with user's name
    * save the object
    * if errors occurs, send response with **Bad Request** status and error message

* List all the users
  * create a get route, */users*, send JSON response
  > use pug template engine to render user list

* Delete a user
  * create a delete route, */users/:usedId*