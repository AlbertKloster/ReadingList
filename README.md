# Reading List App
## Modern React with Redux

## Second Stage 2023/05/24

npm install json-server

package.json ->   add in "scripts" a "server" command as following:
"scripts": {
"start": "react-scripts start",
"server": "json-server -p 3001 --watch db.json",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
}

create api.http with REST requests for testing API