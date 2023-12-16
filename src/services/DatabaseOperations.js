// DatabaseOperations.js
import db from './AppDatabase';

const insertUser = (username, email) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO Users (username, email) VALUES (?, ?)', [username, email]);
  });
};

const getUsers = callback => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM Users', [], (_, results) => {
      const users = results.rows.raw();
      callback(users);
    });
  });
};

export { insertUser, getUsers };
