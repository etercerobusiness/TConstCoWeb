export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Destructure all individual fields cleanly from the request body
  const { name, email, phone, service, message } = req.body;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Tercero Leads <onboarding@resend.dev>', 
        to: 'info@terceroconstruction.com', 
        // Including the service requested in the subject can also help HubSpot workflows filter incoming leads
        subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
        // Formatted with distinct tags on separate lines so CRM lead parsers can map them effortlessly
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone || 'Not Provided'}</p>
          <p><strong>Service Requested:</strong> ${service || 'Not Specified'}</p>
          <p><strong>Message:</strong> ${message || ''}</p>
        `,
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Contact form submission error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
