import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {

  await resend.emails.send({
    from: 'mail@calcifergame.com',
    to: email,
    subject: '2fa code',
    html: `
    <p>${token}</p>`
  })

}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`

  await resend.emails.send({
    // u can change this once u add a domain to resend so it comes from a sexier email address.
    from: 'mail@calcifergame.com',
    to: email,
    subject: 'confirm ur email',
    // u have to design the whole email with html
    html: `
    
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #ffffff; color: #333;">

  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff;">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
          <tr>
            <td align="center" bgcolor="#660000" style="padding: 40px 0; border-top-left-radius: 8px; border-top-right-radius: 8px;">
              <h1 style="margin: 0; font-size: 28px; color: #ffffff;">Confirm Your Email Address</h1>
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px;">
              <p style="font-size: 18px; line-height: 1.6; color: #333;">
                Thank you for signing up! To complete your registration, please confirm your email address by clicking the button below:
              </p>
              <table border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                <tr>
                  <td align="center" bgcolor="#660000" style="border-radius: 4px;">
                    <a href="${confirmLink}" target="_blank" style="display: inline-block; padding: 12px 24px; font-size: 18px; color: #ffffff; text-decoration: none; border-radius: 4px; background-color: #660000; border: 2px solid #333;">Confirm Email</a>
                  </td>
                </tr>
              </table>
              <p style="font-size: 16px; line-height: 1.6; margin-top: 30px; color: #333;">If you didn't request this, you can safely ignore this email.</p>
            </td>
          </tr>
          <tr>
            <td bgcolor="#660000" style="padding: 20px 30px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
              <p style="font-size: 14px; line-height: 1.6; margin: 0; color: #ffffff;">
                This email was sent to you by <strong>Your Website Name</strong>. If you have any questions, <a href="mailto:support@yourwebsite.com" style="color: #ffffff; text-decoration: underline;">contact support</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

</body>
</html>

    
    `
  })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-password?token=${token}`

  await resend.emails.send({
    // u can change this once u add a domain to resend so it comes from a sexier email address.
    from: 'mail@calcifergame.com',
    to: email,
    subject: 'reset ur password',
    // u have to design the whole email with html
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333;
      text-align: center;
    }
    p {
      color: #666;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Reset Your Password</h1>
    <p>We received a request to reset your password. To reset your password, click the button below:</p>
    <p style="text-align: center;"><a href="${confirmLink}" class="btn">Reset Password</a></p>
    <p>If you didn't request to reset your password, you can ignore this email.</p>
    <p>Thank you,<br> The Resend Team</p>
  </div>
</body>
</html>

    `
  })
}