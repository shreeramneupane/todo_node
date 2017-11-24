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
  