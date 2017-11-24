# Using template engine **PUG**
 
* install *pug* module
* use *pug* as template engine
  
  add to *app.js*
  ```
  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "views"));
  ```
* create *hello_form.pug* that render same as *hello_form.html*

* create *users.pug* to show the list of users in a table

* add a column to users list table which has link to delete the user
  * send a *delete* request by overriding *post* request that is sent with form submission
    * install *method-override* module
    * use *method-override* with express
      ```
      var methodOverride = require('method-override')
      var app = express()
      app.use(methodOverride('_method'))
      ```
      overrides request method with the new method that is sent over the params with name **_method**
    * form should post action to */users/:userId?_method=DELETE*
  * show confirmation popup