"use server"

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendEmail = async (name: string , email: string, message: string) => {
  const mailOptions = {
    from: '"Portfolio Contact" <enter67803@gmail.com>',
    to: process.env.NEXT_PUBLIC_TO_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                      📬 New Contact Message
                    </h1>
                    <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px;">
                      You've received a new message from your portfolio
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    
                    <!-- Sender Info -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 20px; background-color: #f8f9ff; border-radius: 8px; border-left: 4px solid #667eea;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding-bottom: 15px;">
                                <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                                  Sender Details
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-bottom: 12px;">
                                <table cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style="padding-right: 10px; vertical-align: top;">
                                      <span style="font-size: 18px;">👤</span>
                                    </td>
                                    <td>
                                      <p style="margin: 0; font-size: 14px; color: #94a3b8; font-weight: 500;">Name</p>
                                      <p style="margin: 5px 0 0 0; font-size: 16px; color: #1e293b; font-weight: 600;">
                                        ${name}
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style="padding-right: 10px; vertical-align: top;">
                                      <span style="font-size: 18px;">📧</span>
                                    </td>
                                    <td>
                                      <p style="margin: 0; font-size: 14px; color: #94a3b8; font-weight: 500;">Email</p>
                                      <p style="margin: 5px 0 0 0; font-size: 16px; color: #1e293b; font-weight: 600;">
                                        <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                                          ${email}
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 25px; background-color: #fafafa; border-radius: 8px; border: 1px solid #e2e8f0;">
                          <p style="margin: 0 0 10px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                            💬 Message
                          </p>
                          <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.7; white-space: pre-wrap;">
                            ${message}
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 30px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 10px 0; font-size: 14px; color: #64748b;">
                      Reply directly to this email to respond to <strong>${name}</strong>
                    </p>
                    <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                      Sent from your portfolio contact form • ${new Date().toLocaleString('en-US', { 
                        dateStyle: 'long', 
                        timeStyle: 'short' 
                      })}
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
    replyTo: email,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if(error) return console.log(error);
    
    console.log('Email sent: ', info);
  })
}