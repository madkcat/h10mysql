// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Load the NPM Package for mysql
var mysql = require("mysql");

// Load the NPM Package console.table
var consoleTable = require("console.table")
console.log(`Bamazon 
Sale:
`);

console.table([{
  Product: 'Disneyland Promo Tickets',
  Price: 10
}, {
  Product: 'Rosegold Ears',
  Price: 10
}, {
  Product: 'RokuHD',
  Price: 10
}, {
  Product: 'Super Mario',
  Price: 10
}, {
  Product: 'Batman the movie',
  Price: 10
}, {
  Product: 'Polaroid',
  Price: 10
}, {
  Product: 'Pennywise Costume',
  Price: 10
}, {
  Product: 'Very Hungry Catterpilla',
  Price: 10
}, {
  Product: 'Nintendo Classic',
  Price: 10
}, {
  Product: 'Sony A7R',
  Price: 10
}]);

var questions = [{
  name: "items",
  type: "list",
  message: " Welcome to BaMaZon! Here are some items you can buy: ",
  choices: ["Disneyland Promo Tickets $10", "Sony A7R $10", "Rosegold Ears $10 ", "RokuHD $10 ", "Super Mario $10 ", "Batman the movie $10 ", "Polaroid $10", "Pennywise Costume $10 ", "Very Hungry Catterpilla $10 ", "Nintendo Classic $10 "]
},
{
  name: "quantity",
  type: "input",
  message: "How many would you like to buy?",

}
];

inquirer.prompt(questions).then(function (answers) {
  console.log('\n Order receipt: \n');
  var item = answers.items;
  var quantity = answers.quantity;

  var orderRecipt = [item, quantity];

  console.log('Item:  ' + item);
  console.log('   ');
  console.log('Quantity: ' + quantity);
  console.log('   ');

});

// Function that gets data from mysql database.
function bamazonSQL() {

  // create the connection information for the sql database
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "BaMaZoN_DB"
  });

  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  });

  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;
    var productID = results[0].id;
    var productName = results[0].product_name;
    var department_name = results[0].department_name;
    var productPrice = results[0].price;
    var stockQuantity = results[0].stock_quantity;

    var product1 = {
      product_ID: productID,
      product_Name: productName,
      departmentName: department_name,
      product_price: productPrice,
      quantity: stockQuantity
    };

    console.log(product1);
  });
  connection.end();
}