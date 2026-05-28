# EmailJS Integration Guide

## Overview

This portfolio uses **EmailJS** to send contact form submissions directly to your email address. No backend server is required!

## Setup Instructions

### 1. Environment Variables

The following environment variables are configured in `.env`:

```
VITE_EMAILJS_SERVICE_ID=service_ish5qla
VITE_EMAILJS_PUBLIC_ID=Ocg6ucHnBpEotNzpB
VITE_EMAILJS_TEMPLATE_ID=template_8bbr2vw
```

⚠️ **Important**: Keep the `.env` file private and never commit it to version control.

### 2. How It Works

When a visitor submits the contact form:

1. The form data is captured in the App component
2. `sendContactEmail()` function sends the data via EmailJS API
3. EmailJS processes the request and sends an email to **praveens1306@gmail.com**
4. A success message is displayed to the user

### 3. Email Service Configuration

The email service uses:

- **Service ID**: Identifies your EmailJS email service
- **Public Key**: Allows client-side email sending (safe to expose)
- **Template ID**: EmailJS email template to format the message

### 4. Sending Email Flow

```
User Form Submission
       ↓
handleContactSubmit() in App.tsx
       ↓
sendContactEmail() in utils/emailService.ts
       ↓
EmailJS API
       ↓
Your Email (praveens1306@gmail.com)
```

### 5. Customization

To change the receiving email address, edit `src/utils/emailService.ts`:

```typescript
to_email: 'praveens1306@gmail.com', // Change this to your email
```

### 6. Troubleshooting

**Emails not sending?**

- Verify EmailJS credentials are correct in `.env`
- Check browser console for error messages
- Ensure your EmailJS account is active
- Verify template variables match those sent from the form

**Testing**

- Try submitting a test message through the contact form
- Check your email inbox (and spam folder)
- View detailed logs in browser DevTools console

### 7. Dependencies

- `@emailjs/browser` - Client-side EmailJS library

Install with:

```bash
npm install @emailjs/browser
```

## Files Modified/Created

- `.env` - EmailJS credentials
- `src/vite-env.d.ts` - TypeScript environment variable types
- `src/utils/emailService.ts` - Email sending utility
- `src/App.tsx` - Updated contact form handler

---

For more info, visit: https://www.emailjs.com/docs/
