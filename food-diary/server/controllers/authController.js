
import { readFile } from "fs/promises"

const userDataFile = '../server/userDB.json';
 
async function readUserData() {
  const data = await readFile(userDataFile, 'utf-8');
  return JSON.parse(data);
  }

// Function to log in a user
const loginUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password; 

  try {
    const userData = await readUserData();
    const user = userData.users.find((u) => u.username === username);

    if (user && user.password === password) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) { 
    console.error('Login error:', error);
    res.status(500).json({ message: 'Authentication failed' });
  }
}; 

export default {
  loginUser,
};