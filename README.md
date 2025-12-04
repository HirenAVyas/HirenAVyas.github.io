# vCard - Personal portfolio

![GitHub repo size](https://img.shields.io/github/repo-size/codewithsadee/vcard-personal-portfolio)
![GitHub stars](https://img.shields.io/github/stars/codewithsadee/vcard-personal-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/codewithsadee/vcard-personal-portfolio?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/codewithsadee_?style=social)](https://twitter.com/intent/follow?screen_name=codewithsadee_)
[![YouTube Video Views](https://img.shields.io/youtube/views/SoxmIlgf2zM?style=social)](https://youtu.be/SoxmIlgf2zM)

vCard is a fully responsive personal portfolio website, responsive for all devices, built using HTML, CSS, and JavaScript.

## Demo

![vCard Desktop Demo](./website-demo-image/desktop.png "Desktop Demo")
![vCard Mobile Demo](./website-demo-image/mobile.png "Mobile Demo")

## Prerequisites

Before you begin, ensure you have met the following requirements:

* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.

## Installing vCard

To install **vCard**, follow these steps:

Linux and macOS:

```bash
sudo git clone https://github.com/codewithsadee/vcard-personal-portfolio.git
```

Windows:

```bash
git clone https://github.com/codewithsadee/vcard-personal-portfolio.git
```

## Contact Form Setup (EmailJS)

The contact form uses EmailJS to send emails. To set it up:

1. **Create an EmailJS account**:
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (200 emails/month free)

2. **Create an Email Service**:
   - Go to "Email Services" in the dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy your **Service ID**

3. **Create an Email Template**:
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use this template structure:
     ```
     From: {{from_name}} <{{from_email}}>
     To: Your Name <your-email@example.com>
     Subject: New Contact Form Message
     
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - Save and copy your **Template ID**

4. **Get your Public Key**:
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Update the configuration**:
   - Open `assets/js/script.js`
   - Find the EmailJS configuration section (around line 258)
   - Replace the placeholder values:
     ```javascript
     const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
     const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
     const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
     ```
   - Replace with your actual values

6. **Test the form**:
   - Open your website
   - Fill out and submit the contact form
   - Check your email inbox for the message

## Contact

If you want to contact me you can reach me at [Twitter](https://www.x.com/codewithsadee_).

## License

MIT
