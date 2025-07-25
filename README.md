# Nodejs, expressjs and mongodb project
---

## Install dependencies and init project
use **--save** to save dependencies in the project and **--force** to force the installation

| dependencies             | purpose                                                        |
|--------------------------|----------------------------------------------------------------|
| npm install config       | add configuration files (default, dev , prod) to the project   |
| npm install -g nodemon   | install globally nodemon to use it instead of node server      |
| npm install express      | install express to use it in the project                       |
| npm install mongoose     | use to communicate with mongodb                                |
| npm install mongoose-unique-validator | to ensure that mongoose schema has unique value for an attribute |
| npm install bcrypt       | use bcrypt hash protocol in the project                        |
| npm install jsonwebtoken | use authentication tokens (jwt) in the project                 |
| npm install multer       | package usefull to save files from input requests              |

## Clone and run front
``
git clone https://github.com/OpenClassrooms-Student-Center/go-fullstack-v3-fr.git frontend
``

``
cd frontend
``
``
npm install / npm update
``
``
npm run start
``