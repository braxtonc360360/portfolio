import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 5000; 

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'braxton',         // New User
  password: 'password123', // New Password
  database: 'portfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL Database');
});

// --- ROUTES ---

app.get('/projects', (req, res) => {
  const sql = 'SELECT * FROM projects ORDER BY display_order ASC';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching projects:', err); 
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

app.post('/projects', (req, res) => {
  const { title, description, image_url, tech_stack, github_link, display_order } = req.body;
  const sql = 'INSERT INTO projects (title, description, image_url, tech_stack, github_link, display_order) VALUES (?, ?, ?, ?, ?, ?)';
  
  db.query(sql, [title, description, image_url, tech_stack, github_link, display_order], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Project added!', id: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});