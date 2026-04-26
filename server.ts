import express, { Request, Response } from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Email service error:', error)
  } else {
    console.log('Email service ready:', success)
  }
})

// Contact Form Handler
app.post('/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // Email to yourself
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Reply email to visitor
    const visitorMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting me through my portfolio.</p>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <p>
          <strong>Your Message Summary:</strong><br>
          Subject: ${subject}<br>
          Message: ${message.replace(/\n/g, '<br>')}
        </p>
        <p>Best regards,<br>Belmont</p>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(visitorMailOptions)

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      error: 'Failed to send message. Please try again later.',
    })
  }
})

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'Server is running' })
})

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

export default app
