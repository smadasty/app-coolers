# coolers

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Steps

** Any commands listed below with option "-g" are run with ADMIN privileges.

1. Install Yeoman.
    a. npm install -g yo
2. Install other dependent packages
    a. npm install -g grunt-cli bower yo generator-karma generator-angular
3. mkdir my-new-project && cd $_
4. Create the angular app: yo angular [app-name] (the app name parameter is optional).
5. Run the app locally with the following command : grunt serve
6. Install more dependent packages:
    a. npm install gzippo express morgan --save
7. Create a server file called web.js in the root director: /web.js
    a. update web.js with follwoing code:
        var gzippo = require('gzippo');
        var express = require('express');
        var morgan = require('morgan');
        var app = express();
        app.use(morgan('dev'));
        app.use(gzippo.staticGzip("" + __dirname + "/dist"));
        app.listen(process.env.PORT || 5000);
8. Run the following command to build the project: grunt build
9. Remove 'dist' from the .gitignore file
10. Add a new file : Procfile
11. Update "Procfile" with follwoing line:
    a. web: node web.js
12. Create Heroku Account and install Heroku Toolbelt.
13. Github instructions:
    a. git init
    b. git add .
    c. git commit -m "Create angular app using Yeoman"
14. Heroku instructions:
    a. Heroku Login
    b. heroku create <your_app_name>
15. Run the following command to push the content to Heroku account,
    a. git push heroku master
    b. heroku ps:scale web=1
    c. heroku open
