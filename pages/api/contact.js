// pages/api/contact.js
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

const pool = mysql.createPool({
  host: '89.117.9.78',
  user: 'u206708889_siman',
  password: 'Manav!@#123',
  database: 'u206708889_siman',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Configure your SMTP transporter here
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // Replace with your SMTP host
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'help@siman.ca', // Replace with your SMTP username
    pass: 'Manav@0312', // Replace with your SMTP password
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, mobile, email, address, course, batch, batch_length, start_date, end_date, timmings } = req.body;

    const query = `INSERT INTO contacts (name, mobile, email, address, course, batch, batch_length, start_date, end_date, timmings) VALUES (?,?,?,?,?,?,?,?,?,?)`;

    let connection;
    try {
      connection = await pool.getConnection();
      const [results] = await connection.execute(query, [name, mobile, email, address, course, batch, batch_length, start_date, end_date, timmings]);

      // Compose email content
      const mailOptions = {
        from: '"Siman Infotech Website" <no-reply@siman.ca>', // sender address
        to: 'info@siman.ca', // admin email address
        subject: 'New Contact Form Submission',
        text: `
          You have a new contact form submission:

          Name: ${name}
          Company: ${company || 'N/A'}
          Email: ${email}
          Phone: ${mobile}
          Address: ${address || 'N/A'}
          Course: ${course || 'N/A'}
          Batch: ${batch || 'N/A'}
          Batch Length: ${batch_length || 'N/A'}
          Start Date: ${start_date || 'N/A'}
          End Date: ${end_date || 'N/A'}
          Timings: ${timmings || 'N/A'}
          Message: ${req.body.message || 'N/A'}
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({ message: 'Data inserted and email sent successfully', id: results.insertId });
    } catch (err) {
      console.error('Error processing contact form:', err);
      res.status(500).json({ message: 'Error processing contact form' });
    } finally {
      if (connection) connection.release();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
