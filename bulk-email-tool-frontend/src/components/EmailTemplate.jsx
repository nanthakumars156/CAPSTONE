// src/components/EmailTemplate.js
import React, { useState } from 'react'
import axios from 'axios'

function EmailTemplate() {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [recipients, setRecipients] = useState('')
  const token = localStorage.getItem('token')

  const handleSend = async () => {
    try {
      const recipientList = recipients.split(',')
      await axios.post(
        'http://localhost:5000/api/emails/send',
        { recipientList, subject, body },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      alert('Emails sent successfully!')
    } catch (error) {
      console.error('Error sending emails', error)
    }
  }

  return (
    <div className="container">
      <h1>Create Email Template</h1>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Email body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input
        type="text"
        placeholder="Recipients (comma separated)"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />
      <button onClick={handleSend}>Send Emails</button>
    </div>
  )
}

export default EmailTemplate
