// pages/api/contact.js
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

const pool = mysql.createPool({
  host: '89.117.9.78',
  user: 'u206708889_siman',
  password: 'Kokri@6000',
  database: 'u206708889_siman',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Configure your SMTP transporter here with real credentials
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // Replace with your SMTP host
  port: 587, // or 465 for secure
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'help@siman.ca', // Replace with your SMTP username
    pass: 'Manav@0312', // Replace with your SMTP password
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, company, email, phone, message } = req.body;

    const query = `INSERT INTO contacts (name, mobile, email, address, course, batch, batch_length, start_date, end_date, timmings) VALUES (?,?,?,?,?,?,?,?,?,?)`;

    let connection;
    try {
      connection = await pool.getConnection();
      // Insert with placeholders for missing fields as null
      const [results] = await connection.execute(query, [
        name || null,
        phone || null,
        email || null,
        null, // address
        null, // course
        null, // batch
        null, // batch_length
        null, // start_date
        null, // end_date
        null, // timmings
      ]);

      // Compose email content
      const mailOptions = {
        from: `"Siman Infotech Website" <${transporter.options.auth.user}>`, // sender address
        to: 'info@siman.ca', // admin email address
        subject: 'New Contact Form Submission',
        text: `
You have a new contact form submission:

Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Phone: ${phone}
Message: ${message || 'N/A'}
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Data inserted and email sent successfully', id: results.insertId });
    } catch (err) {
      console.error('Error processing contact form:', err);
      res.status(500).json({ message: 'Error processing contact form', error: err.message });
    } finally {
      if (connection) connection.release();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
