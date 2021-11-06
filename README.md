# Tech Blog

## Description 
This application is a CMS-style blog site that allows users to publish articles and blog posts and the latest technologies and comment on other developers' posts as well. This application follows the Model View Controller (MVC) architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication.

​
## Installation
​
Clone the repository, navigate to the project folder on your CLI and run the following command to install Node.js:

```npm install```
## Usage 
Run the following command on your CLI to run the application:

```node server.js```



## Packages

* express-handlebars https://www.npmjs.com/package/express-handlebars to use Handlebars.js for Views
* MySQL2  https://www.npmjs.com/package/mysql2 to connect to a MySQL database for Models
* Sequelize https://www.npmjs.com/package/sequelize to create an Express.js API for Controllers
* dotenv https://www.npmjs.com/package/dotenv to use environmental variables
* bcrypt https://www.npmjs.com/package/bcrypt to hash passwords
* express-session https://www.npmjs.com/package/express-session for authentication, storing session data on client side in a cookie. When idle on the site for more than a set time, the cookie expires and the user is required to log in again to start a new session.
* connect-session-sequelize https://www.npmjs.com/package/connect-session-sequelize for authentication

​
## Credits

Created by MaxAeon.

## Questions
For additional questions and information, please visit my [GitHub profile](github.com/maxaeon/)
or reach out via email at maparks@ucdavis.edu.

## License
​
MIT License

Copyright (c) [2021] [MaxAeon]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
