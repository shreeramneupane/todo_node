# Database

This article helps to understand the CRUD operation on MongoDB.

* Explore [this link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) to install mongodb.

  Login to MongoDB shell with the command:
  ```
  $ mongo
  ```
  
* **use** command followed by *database name*
  ```
  > use test_db
  ```
  If database doesn't exist, new one will be created after *document* is added

* List database
  ```
  > show dbs
  ```
* List collections
  ```
  > show collections
  ```
* Create Document
  ```
  > db.movies.insert({name:'Kabaddi Kabaddi', rating: 4})
  > db.movies.insert({name:'Kalo Pothi', rating: 4})
  > db.movies.insert({name:'Seto Surya', director: 'Deepak Rauniyar'})
  ```

* Retrieve records
  * list all
    ```
    > db.movies.find()
    > db.movies.find({rating: 4})
    ```
  * get one
    ```
    > db.movies.findOne()
    > db.movies.findOne({name: 'Seto Surya'})
    ```
 
* Update records
  * replace the whole document
    ```
    > db.movies.update({name: 'Kabaddi Kabaddi'}, {name: 'Kabaddi'}) 
    ```
  * change certain attributes of a given document
    ```
    > db.movies.update({name: 'Kalo Pothi'},
        {$set: {rating: 4.5}})
    ```
  * remove an attribute from a given document
     ```
     > db.movies.update({name: 'Kalo Pothi'},
         {$unset: {rating: ""}})
     ```
  
* Delete records
  ```
  > db.movies.remove({name: 'Kalo Pothi'})
  ```
  
*All above-stated operations are successfully performed on Ubuntu 14.04.*