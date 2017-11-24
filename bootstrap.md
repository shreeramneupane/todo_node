# Styling with Bootstrap

* install **bootstrap** module
  Explore [Bootstrap going to this link](http://getbootstrap.com/)
* install **popper.js** and **jquery** modules too, they are dependencies of **bootstrap** modules
* use it in *layout.pug*
  ```
  script
    include ../node_modules/jquery/dist/jquery.min.js
    include ../node_modules/popper.js/dist/popper.min.js
    include ../node_modules/bootstrap/dist/js/bootstrap.min.js
  style(type='text/css' rel='stylesheet')
    include ../node_modules/bootstrap/dist/css/bootstrap.min.css
  ```

* add `container` class to body tag
* add `table` class to table
* add `btn` class to all button
* add `btn-danger` class to delete button
* add `text-muted` class to edit button
* wrap input field with div and add class `form-group`
* add `form-control` class to all input tag
* in user detail page add
  ```
  div.container
    div.well.row
      div.col-sm-4 Name:
      div.col-sm-8 #{user.name}
  ```
  removing
  ```
  span Name: #{user.name}
  ```
* use grid layout where possible
  
  Explore [grid layout going to this link](https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp).