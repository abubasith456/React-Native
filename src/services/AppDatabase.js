// Database.js
import SQLite from 'react-native-sqlite-storage';

const databaseName = 'MyDB.db';
const databaseVersion = '1.0';
const databaseDisplayName = 'My App Data';
const databaseSize = 200000;

const db = SQLite.openDatabase(
    {
        name: databaseName,
        version: databaseVersion,
        displayName: databaseDisplayName,
        size: databaseSize,
    },
    () => { },
    error => {
        console.error('Error opening database:', error);
    }
);

export default db;