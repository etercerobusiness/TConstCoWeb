export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, position, message, resumeName, resumeContent } = req.body;

    // Build the payload
    const payload = {
      from: 'info@terceroconstruction.com', // Ensure this matches the verified sender from your contact form
      to: 'info@terceroconstruction.com',
      subject: `New Job Application: ${name} - ${position || 'Applicant'}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position Applied For:</strong> ${position}</p>
        <p><strong>Cover Letter / Details:</strong><br/> ${message}</p>
      `,
    };

    // Attach the resume if it was provided
    if (resumeContent && resumeName) {
      payload.attachments = [
        {
          filename: resumeName,
          content: resumeContent, // Base64 string sent from the frontend
        }
      ];
    }

    // Call Resend directly using fetch, matching your contact form setup
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API Error:', data);
      return res.status(400).json({ error: data });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server error processing application:', error);
    return res.status(500).json({ error: 'Failed to process the application.' });
  }
}
