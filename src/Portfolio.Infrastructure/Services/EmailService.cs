using Microsoft.Extensions.Configuration;
using Resend;

namespace Portfolio.Infrastructure.Services;

public class EmailService
{
    private readonly IResend _resend;
    private readonly string _toEmail;

    public EmailService(IResend resend, IConfiguration configuration)
    {
        _resend = resend;
        _toEmail = configuration["Admin:Email"]!;
    }

    public async Task SendContactNotificationAsync(string fromName, string fromEmail, string message)
    {
        var email = new EmailMessage
        {
            From = "onboarding@resend.dev",
            To = { _toEmail },
            Subject = $"Nytt kontaktmeddelande från {fromName}",
            HtmlBody = $"""
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; background-color: #f8f8f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                    <table cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f8f8f8;">
                        <tr>
                            <td align="center" style="padding: 40px 20px;">
                                <table cellpadding="0" cellspacing="0" style="width: 100%; max-width: 560px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden;">
                                    <!-- Header -->
                                    <tr>
                                        <td style="padding: 40px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                                            <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #ffffff; letter-spacing: -0.5px;">Nytt meddelande</h1>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 40px 30px;">
                                            <p style="margin: 0 0 24px 0; color: #555555; font-size: 16px; line-height: 1.5;">Hej! Du har mottagit ett nytt meddelande från din portfolio.</p>
                                            
                                            <!-- Sender Info -->
                                            <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                                                <p style="margin: 0 0 12px 0; color: #666666; font-size: 14px;">
                                                    <span style="color: #555555; font-weight: 500;">Från:</span><br>
                                                    <span style="font-size: 16px; color: #333333;">{fromName}</span>
                                                </p>
                                                <p style="margin: 0; color: #666666; font-size: 14px;">
                                                    <span style="color: #555555; font-weight: 500;">E-post:</span><br>
                                                    <a href="mailto:{fromEmail}" style="color: #667eea; text-decoration: none; font-size: 16px;">{fromEmail}</a>
                                                </p>
                                            </div>
                                            
                                            <!-- Message -->
                                            <p style="margin: 0 0 12px 0; color: #555555; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Meddelande</p>
                                            <p style="margin: 0; padding: 20px; background-color: #fafafa; border-left: 4px solid #667eea; color: #333333; font-size: 16px; line-height: 1.6; border-radius: 4px; white-space: pre-wrap;">{message}</p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="padding: 24px 30px; background-color: #fafafa; border-top: 1px solid #eeeeee; text-align: center;">
                                            <p style="margin: 0; color: #999999; font-size: 13px; line-height: 1.5;">
                                                Skickat från din portfolio<br>
                                                <span style="color: #bbbbbb;">—</span><br>
                                                <a href="#" style="color: #667eea; text-decoration: none; font-size: 12px;">Visa på webben</a>
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
                """
        };

        await _resend.EmailSendAsync(email);
    }
}