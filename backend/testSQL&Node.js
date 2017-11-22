//app.js

const mysql = require('mysql');

const connection = mysql.createConnection({
      host: 'localhost',
      port: '8889',
      user: 'root',
      password: 'root',
      database: 'employee_info'
});

connection.connect((err) => {
      if(err)
            console.log('Error connecting to Db');
            return;
      
      console.log('Connection established');
});

// 
const employee =  "('Winnie', '4444444444', 1)";
const tableName = 'employee';

connection.query('INSERT INTO ' +tableName+ '(name, phone_number, taxable) VALUES ' +employee,  (err, res) => {
      if(err) 
            throw err;
    
      console.log('Last insert ID:', res.insertId);
});

connection.query('UPDATE ' +tableName+ ' SET phone_number = 4444444444 WHERE ID = 4', (err, res) => {
      if(err)
            throw err;

      console.log('Last insert ID:', res.insertId);
});

// output rows
connection.query('SELECT * FROM ' +tableName+ ' ', (err,rows) => {
      if(err) 
            throw err;
    
      console.log('Data received from Db:\n');
      console.log(rows);
});

connection.end((err) => {
      console.log('conn terminate');
// The connection is terminated gracefully
// Ensures all previously enqueued queries are still
// before sending a COM_QUIT packet to the MySQL server.
});