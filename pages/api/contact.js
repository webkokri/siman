// pages/api/contact.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '89.117.9.78',
  user: 'u206708889_siman',
  password: 'Manav!@#123',
  database: 'u206708889_siman',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, mobile, email, address, course, batch, batch_length, start_date, end_date, timmings } = req.body;

    const query = `INSERT INTO contacts (name, mobile, email, address, course, batch, batch_length, start_date, end_date, timmings) VALUES (?,?,?,?,?,?,?,?,?,?)`;

    let connection;
    try {
      connection = await pool.getConnection();
      const [results] = await connection.execute(query, [name, mobile, email, address, course, batch, batch_length, start_date, end_date, timmings]);
      res.json({ message: 'Data inserted successfully', id: results.insertId });
    } catch (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ message: 'Error inserting data' });
    } finally {
      if (connection) connection.release();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}