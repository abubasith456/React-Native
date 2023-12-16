// Tables.js
import db from './AppDatabase';

// Create a table for storing user data
const createUserTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT)'
    );
  });
};

export { createUserTable };
