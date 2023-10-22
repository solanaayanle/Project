import { readFileSync, writeFileSync } from 'fs';
import express from 'express'; 

const app = express();
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Read existing user data from the JSON file
  const userData = JSON.parse(readFileSync('userDB.json'));

  // Add the new user to the data
  userData.users.push({ username, password });

  // Save the updated user data to the JSON file
  writeFileSync('userDB.json', JSON.stringify(userData, null, 2));

  // Respond to the client
  res.status(201).json({ message: 'User registered' });
});