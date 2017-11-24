# Using template engine **PUG**
 
* install *pug* module
* use *pug* as template engine
  
  add to *app.js*
  ```
  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "views"));
  ```
* create *hello_form.pug* that render same as *hello_form.html*