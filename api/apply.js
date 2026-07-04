export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Destructure all the fields coming from your frontend Apply component
  const { name, email, phone, position, message, resumeName, resumeContent } = req.body;

  try {
    // 1. Build the base payload exactly like contact.js
    const payload = {
      from: 'Tercero Leads <onboarding@resend.dev>', 
      to: 'info@terceroconstruction.com',
      subject: `New Job Application: ${name} - ${position || 'Applicant'}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position Applied For:</strong> ${position}</p>
        <p><strong>Details:</strong><br/> ${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // 2. Attach the resume if one was uploaded
    if (resumeContent && resumeName) {
      payload.attachments = [
        {
          filename: resumeName,
          content: resumeContent, // Base64 string from the frontend
        }
      ];
    }

    // 3. Send the fetch request to Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    // 4. Handle Resend API errors
    if (!response.ok) {
      console.error('Resend API Error:', data);
      return res.status(400).json({ error: data });
    }

    // 5. Success
    return res.status(200).json(data);
  } catch (error) {
    console.error('Server error processing application:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
