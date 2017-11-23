# Setup Node.JS app

* Installation

  * Among multiple way to install Node.js, to make is simple lets install using Ubuntu's inbuilt **apt**:
 
    ```
    sudo apt-get update
    sudo apt-get install nodejs
    ```
    Verify version with:
    ```
    node -v
    ```
    
  * Install the Node package manager, npm:

    ```
    sudo apt-get install npm
    ```
    Checkout version with:
    ```
    npm -v
    ```
* Create a file with name **app.js**
  
  let's write very basic code to output **Hello World!**. Write down below code in the app.js file.
  
  `
  console.log('Hello World!')
  `
* Run the file:
  
  ```script
  node app.js
  ```
  It will output text **Hello World!**