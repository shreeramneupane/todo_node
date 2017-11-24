# Refactor

### Refactor after understanding [DEV-4](https://github.com/shreeramneupane/todo_node/tree/DEV-4)
* main route `/` only has **Hello World!** text, let's redirect to users list page
* change **/hello_form** route to **/users/new**, as it create new user
* add **Add User** link in users list page
* change post route **/hello** to **/users**
* create user detail route **/users/:userId** and show detail of user
* after user creation redirect to user detail page
* on user list page, add link to each user's name to redirect to user detail page
* add delete and edit link in user detail page too
* after editing user, redirect to user detail page, not to users list page
* on user edit page, add link to user detail and list page
* on user detail page, add link to user list page
* create *user_delete_form.pug*, which has user delete button and include it where user delete button is required
* create **layout.pug** with basic HTML page layout and extend it in each page

## Refactor before adding API routes
* create **routes** folder, create **user.routes.js** inside it
* add following code the file **user.routes.js**
  ```
  const express = require('express'),
    app = express.Router();
    
    app.get('/new_routes', (req, res) => {
      res.end("New Route")
    })
    
  module.exports = app;
  ```

* require the **user.routes.js** inside **app.js**
  ```
  app.use('/', require('./routes/user.routes'));
  ```

* open routes, [http://localhost:3000/new_routes](http://localhost:3000/new_routes)

  Browser render **New Route**