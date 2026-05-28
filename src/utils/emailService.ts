/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import emailjs from "@emailjs/browser";

// Initialize EmailJS with public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_ID);

export interface ContactFormData {
  visitorName: string;
  visitorEmail: string;
  visitorScope: string;
  visitorMessage: string;
}

/**
 * Send contact form data via EmailJS
 * @param formData - Contact form data from the user
 * @returns Promise resolving to EmailJS response
 */
export async function sendContactEmail(formData: ContactFormData) {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.visitorName, // Matches {{name}} in template
        email: formData.visitorEmail, // Matches {{email}} in template
        title: formData.visitorScope, // Matches {{title}} in template
        message: formData.visitorMessage, // Matches {{message}} in template
        to_email: "praveens1306@gmail.com", // Your receiving email
      },
    );

    return {
      success: true,
      messageId: response.status,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}
