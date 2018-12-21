# burger

### Try out the [deployed app on Heroku!](https://stormy-fjord-50226.herokuapp.com/)

#### Full stack app where users enter burgers they would like to eat which is routed through express then stored in a MySQL database to be displayed back to the user. Uses MVC model.

#### Resources:
##### Written in JavaScript on Node.js using the following npm packages: 
* express
* express-handlebars
* mysql
* method-override

#### Layout: 
Controller uses express router to route ajax calls to the correct view methods for CRUD cunctionality. The burger view fills in information that is fixed such as table name and columnn names. The view then calls the orm methods that fill the SQL queries and send them to the MySQL database using the mysql library.
