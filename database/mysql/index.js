const mysql = require('mysql2');
const Promise = require('bluebird');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowList'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

module.exports = connection;

const mysqlPromise = Promise.promisifyAll(connection, { multiArgs: true });
const readAll = async () => {
  var cows = await mysqlPromise.queryAsync(
    `SELECT * FROM cows`
  )
  console.log(cows[0])
  return cows[0];
}

const doesItExist = async (name) => {
  var existingCow = await mysqlPromise.queryAsync(
    `SELECT c.name FROM cows c WHERE c.name = '${name}'`
  );
  console.log(existingCow[0]);
  if (existingCow[0].length > 0) {
    return true;
  } else {
    return false;
  }
}
const inputCow = async (cow) => {
  var inDb = await doesItExist(cow.name);
  if (!inDb) {
    await mysqlPromise.queryAsync(
      `INSERT INTO cows VALUES (DEFAULT, '${cow.name}', '${cow.description}')`
    )
    return 'SUCCESS';
  }
  return 'FAILURE';
}


// Don't forget to export your functions!
module.exports.readAll = readAll;
module.exports.doesItExist = doesItExist;
module.exports.inputCow = inputCow;



