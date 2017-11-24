# Todo Node.JS Project

This project is basic guidelines for a Node.JS beginner.

## Objective:
* Create, Retrieve, Update and Delete(CRUD) for todo task.

## Technology used for development:
1. OS: [Ubuntu](https://www.ubuntu.com/)| Version 14.04
2. Database: [MongoDB](https://www.mongodb.com/) | Version 3.4.10
3. Node.js web application: [Express](https://expressjs.com/)
4. Browser: [Chromium](https://www.chromium.org/)
5. HTTP Client CLI: [curl](https://github.com/curl/curl)

*Please prefer the latest version as possible*
> Alternative OS, Browser and HTTP Client CLI can be used to run this app.

## Development
1. Understand MongoDB database
2. Create a basic Node project
3. Routing and HTML page rendering
4. Working with database
5. Page design with Twitter Bootstrap
6. API development

## Git branching
* Final app is in master branch
* For each task, branch name with pattern **DEV-_Task Number_**, like **DEV-1**

## Using Markdown files
* [mongodb.md](mongodb.md) to understand [DEV-1](https://github.com/shreeramneupane/todo_node/tree/DEV-1)
* [node_setup.md](node_setup.md) to understand [DEV-2](https://github.com/shreeramneupane/todo_node/tree/DEV-2)
* [routing.md](routing.md) to understand [DEV-3](https://github.com/shreeramneupane/todo_node/tree/DEV-3)
* [DEV-4](https://github.com/shreeramneupane/todo_node/tree/DEV-4) covers:
  * CRUD operation
  * templating with [pug](https://www.npmjs.com/package/pug)
  
  so, understand both [database.md](database.md) and [pug.md](pug.md)

* It's time to refactor code, so read [refactor.md](refactor.md)

* [bootstrap.md](bootstrap.md) to understand [DEV-5](https://github.com/shreeramneupane/todo_node/tree/DEV-5)

* Go to [refactor.md](refactor.md#refactor-before-adding-api-routes), More refactor as need api too

* [api.md](api.md) to understand [DEV-6](https://github.com/shreeramneupane/todo_node/tree/DEV-6)

## Routes

|Route|Method|Response Content Type|Remark|
|---|---|---|---|
|/users|GET|HTML|Render users list page|
|/|GET|HTML|Redirect to `/users`|
|/users/new|GET|HTML|Render create new user form|
|/users/:userId|GET|HTML|Render the user detail page|
|/users|POST|HTML|Create new user and Render the user detail page|
|/users/:userId/edit|GET|HTML|Render the user edit form|
|/users/:userId|PUT|HTML|Update the user and Render the user detail page|
|/users/:userId|DELETE|HTML|Delete the user and Render users list page|
|/users|GET|JSON|List User|
|/users|POST|JSON|Create new User|
|/users/:userId|PUT|JSON|Update a user|
|/users/:userId|DELETE|JSON|DELETE|
