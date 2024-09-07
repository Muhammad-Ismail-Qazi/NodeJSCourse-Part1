
//simple output
console.log("Starting Node js development");



// if condition confirmation 

let age = 20;

if (age >= 18) {
  console.log("You're adult");
  console.log("What whould you like to drink? ");
  let beavage = ['water', 'milk', 'orange juice',];
  console.log("we have \n" + beavage);

  // accessing array element
  console.log("Ismail would like : " + beavage[2]);
  console.log("And my friends like");

  let friendDemanded = ['Rahman', 'John', 'John khan'];

  let price = [20, 50, 30];
  let total;
  for (i = 0; i < beavage.length; i++) {
    console.log(friendDemanded[i] + " would like : " + beavage[i] + " Price: " + price[i]);
    total += price[i];

  }
  console.log("Total price for all beverages: " + total);
} else {
  console.log("You are not mature yet");
}

// Now let's learn about modules common js modules vs ES modules

// Importing a module that is in util.js file


console.log("Importing module METHOD ONE ...");

const util = require('./util');



console.log(util.add(2, 6));
console.log(util.subtract(5, 3));

// Another way we can achieve the same result

console.log("Mehtod two fOR import export modules")

const { add, subtract, } = require('./util');

console.log(add(1, 1));
console.log(subtract(10, 5));

// Local and Global Modules

// Local Modules

console.log("Local module");

// const {add ,subtract} = require('./util');  // we already have a local module above

console.log(add(10, 5));

//Global Modules

console.log("Global module");


// Let's learn about the arrow functions and Normal functions


//Normal Functions

console.log("Normal function");

let addNumbers = function (a, b) {
  return a + b;
}

console.log(addNumbers(2, 3));

let multiply = (a, b) => a * b;

console.log(multiply(2, 3));

let square = (a) => a * a;

console.log(square(5));


//Global object or Global keyword use 

console.log("Global object");

console.log(global.console);



console.log(setTimeout);





// Create a server and Http module

console.log("Creating a server");

const http = require('http');

const port = 4500;

const server = http.createServer((req, res) => {
  res.writeHead(200, '{"Content-Type":"plain/text"}');
  res.end('Hello World!\n');
  console.log("Server is running on port " + port);
}).listen(port);



//Now let's integrate file system Modules

console.log("File system module");

const fs = require('fs');
// const http = require('http');  

const readFilePort = 3000;

// Read File Integration
console.log("Read File Integration");

// create a file with name of read_file 

console.log("Creating a server To Read file");

console.log("Creating server for creating file")

http.createServer(function (req, res) {
  fs.readFile('read_file.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(readFilePort);


// create file 

console.log("Create file with append Method");

// const fs = require('fs');
// const http = require('http'); 


const createFilePort = 80;

http.createServer((req, res) => {
  fs.appendFile('create_file.html', "Data inside created file", 'utf8', function (err) {
    if (err) throw err;
    console.log('Saved!');
    console.log("server for creating file is running on port " + createFilePort);
    res.end();
  });

}).listen(createFilePort);





console.log("Creating file with open method");

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

console.log("Creating file with write method");
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


console.log("Update the above file");

console.log("updating  file with append method");

fs.appendFile('create_file.html', ' This is the updated text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

console.log("write file method to update file replacing")

fs.writeFile('mynewfile3.txt', 'This is my text to replace all other', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});


console.log("Delete the above file");

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});



console.log("Rename the above file ");


fs.rename('mynewfile3.txt', 'converted_name.html', function (err) {
  if (err) throw err;
  console.log('File Renamed!');

});



// let's learn about the URL Module
console.log("URL GLOBAL MODULES: ");
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


//   var http = require('http');
//   var url = require('url');
//   var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);



console.log("Path module integration ");


var path = require('path');
var address = '/users/test/path/test_file.js'
var filename = path.basename(address);
// var delimiter = path.delimiter(address);
var dirname = path.dirname(address);

// console.log('delimiter :'+ delimiter);
console.log('filename : ' + filename);
console.log('dirname :' + dirname);





const color = require('color');
console.log("Starting about package.json file ".green);



console.log("integration of static simple api ");

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ name: "Muhammad Ismail", age: 25, status: 'single' }));
  res.end();

}).listen(10);


// let learn about express

console.log("Express integration");

var express = require('express');
var app = express();

app.use((req, res, next) => {
  if(req.query.age>=18){
    next();
  }
  else{
    res.send("you are not allowed to access this website");
  }
  
})

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.get('/', function (req, res) {
  res.send('Hello from HomePage!');
});


app.get('/about', function (req, res) {
  res.send('About Page'+ req.query.name );
});

app.listen(1000, function () {
  console.log('Server is running on port 3000');
});



console.log('Staring resful api with help of express');

//lets use mackaroo websit for generate user dummy data 

const users = require('./MOCK_DATA.json');


app.get('/api/users',(req,res)=>{
  return res.json(users);
} );


app.get('/users',(req,res)=>{
  const html = `<ul>
  ${users.map(user=> `<li>${user.first_name}</li>`).join("")}
  </ul>`
  res.send(html);
} );

//get the user having id 1 
console.log("get the user having id 1 ");

app.get('/api/users/:id',(req,res)=>{
  res.setHeader("x-userCustomHeader" , "MuhammadIsmail");
  const id = Number(req.params.id);
  const user = users.find (user=>user.id===id);
  
  res.json(user);

});

app.get('/users/:id',(req, res)=>{
 
  const id=Number(req.params.id);
 const user= users.find(user=>user.id===id);
 if (!user) return res.send(404);
 const html = `<h1>${user.first_name}<h1/>`
 res.send(html);
});

app.use(express.urlencoded({extended: false}));

console.log("Post api to create a new user");

app.post('/api/users',(req,res)=>{
const body = req.body;
users.push({...body,id:users.length+1}  );
fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err, data)=>{
  if(err) console.log(err);
  return res.json({status:'success',id:users.length+1})
});

});


console.log("patch api Update email fo id 1001 in file system MOCKFATA.json");

app.patch('/api/users/:id',(req,res)=>{
  const id = Number(req.params.id);
  const user = users.find((user)=>user.id===id);
  if (!user) return res.send(404);
  user.email = req.body.email;
  fs.writeFile("./MOCK_DATA.json", JSON.stringify([...users]), (err)=>{
    if(err) console.log(err);
    return res.json({status:'success',id})
  });

  console.log("Delete users api");
  
  app.delete('/api/users/:id', function(req, res) {
    const id = Number(req.params.id);

    console.log("ID is " + id);
  
    const user = users.find(user => user.id === id);

    console.log("Match ID is " + (user ? user.id : 'User not found'));
  
    if (!user) return res.sendStatus(404);
  
    users.splice(users.indexOf(user), 1);
  
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(...user), (err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
  
      return res.sendStatus(200);
    });
  });

}); 
  






app.listen(2300, ()=>{console.log('listening port 2300');});