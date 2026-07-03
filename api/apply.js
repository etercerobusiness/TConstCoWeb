import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Destructure the form data, including the base64 resume content
    const { name, email, phone, position, message, resumeName, resumeContent } = req.body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Or your verified domain email once set up
      to: 'info@trueserverconstruction.com', // Replace with your exact Resend registered email
      subject: `New Job Application: ${name} - ${position || 'Applicant'}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position Applied For:</strong> ${position}</p>
        <p><strong>Cover Letter / Message:</strong><br/> ${message}</p>
      `,
      attachments: resumeContent ? [
        {
          filename: resumeName || 'resume.pdf',
          content: resumeContent, // Resend accepts the Base64 string right here
        },
      ] : [], // Sends without attachment if no file was uploaded
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending application email:', error);
    res.status(500).json({ error: 'Failed to send application.' });
  }
}
