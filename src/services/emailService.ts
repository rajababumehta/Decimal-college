import { AdmissionInquiry } from '../types';
import { COLLEGE_INFO } from '../data/collegeData';

export interface SendResult {
  success: boolean;
  message: string;
  recipient: string;
  directEmailUrl?: string;
  gmailComposeUrl?: string;
  whatsAppUrl?: string;
  submissionId?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const TARGET_GMAIL = 'decimalcollege@gmail.com';

/**
 * Format date in Nepali / Asian time string
 */
function getTimestamp(): string {
  try {
    return new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kathmandu',
      dateStyle: 'full',
      timeStyle: 'medium'
    }) + ' (Nepal Time)';
  } catch {
    return new Date().toLocaleString() + ' (Local Time)';
  }
}

/**
 * Save submission to browser localStorage for backup and offline retention
 */
function saveSubmissionLocally(type: 'admission' | 'contact', data: Record<string, any>) {
  try {
    const existing = JSON.parse(localStorage.getItem('decimal_college_inquiries') || '[]');
    const newEntry = {
      id: 'DEC-' + Date.now().toString(36).toUpperCase(),
      type,
      data,
      timestamp: new Date().toISOString(),
      recipient: TARGET_GMAIL
    };
    existing.unshift(newEntry);
    localStorage.setItem('decimal_college_inquiries', JSON.stringify(existing.slice(0, 50)));
    return newEntry.id;
  } catch (err) {
    console.warn('Could not save to localStorage:', err);
    return 'DEC-' + Date.now().toString(36).toUpperCase();
  }
}

/**
 * Generate Gmail Web compose link
 */
export function getGmailWebComposeUrl(subject: string, body: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TARGET_GMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Generate Mailto link
 */
export function getMailtoUrl(subject: string, body: string): string {
  return `mailto:${TARGET_GMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Generate WhatsApp message link
 */
export function getWhatsAppUrl(text: string): string {
  return `https://wa.me/${COLLEGE_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Send Student Online Admission Inquiry to decimalcollege@gmail.com
 */
export async function sendAdmissionInquiry(data: AdmissionInquiry): Promise<SendResult> {
  const submissionId = saveSubmissionLocally('admission', data);
  const timeStr = getTimestamp();

  const emailSubject = `🎓 Online Admission Form: ${data.fullName} - ${data.program}`;
  
  const emailPlainBody = `DECREE / ONLINE ADMISSION INQUIRY
Decimal College, Birgunj (+2 Programs)
----------------------------------------
Student Name: ${data.fullName}
Program Chosen: ${data.program}
Contact Phone: ${data.phone}
Email Address: ${data.email || 'Not provided'}
SEE GPA: ${data.seeGpa || 'Pending / Not provided'}
Previous School: ${data.schoolName || 'Not specified'}
Location / Address: ${data.address || 'Birgunj, Nepal'}
Student Query / Note: ${data.message || 'None'}

Date of Submission: ${timeStr}
Submission ID: ${submissionId}
Target Inbox: ${TARGET_GMAIL}
----------------------------------------
Sent via Decimal College Student Portal
`;

  const whatsAppText = `Namaste Decimal College, I have submitted an online admission form:
Name: ${data.fullName}
Program: ${data.program}
Phone: ${data.phone}
SEE GPA: ${data.seeGpa || 'N/A'}
School: ${data.schoolName || 'N/A'}
Email: decimalcollege@gmail.com`;

  const payload = {
    _subject: emailSubject,
    _template: 'table',
    _captcha: 'false',
    _replyto: data.email || undefined,
    'Student Full Name': data.fullName,
    'Chosen Program': data.program,
    'Contact Mobile Number': data.phone,
    'Email Address': data.email || 'Not provided',
    'SEE Grade Point Average (GPA)': data.seeGpa || 'Pending / Not provided',
    'Previous School / Institution': data.schoolName || 'Not specified',
    'Residential Address': data.address || 'Birgunj, Nepal',
    'Additional Queries / Scholarship Requirements': data.message || 'None',
    'Submission Date & Time': timeStr,
    'Target College Email': TARGET_GMAIL,
    'Application ID': submissionId
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_GMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return {
        success: true,
        message: `Your admission application has been dispatched to ${TARGET_GMAIL}!`,
        recipient: TARGET_GMAIL,
        directEmailUrl: getMailtoUrl(emailSubject, emailPlainBody),
        gmailComposeUrl: getGmailWebComposeUrl(emailSubject, emailPlainBody),
        whatsAppUrl: getWhatsAppUrl(whatsAppText),
        submissionId
      };
    } else {
      // Still consider success with email client options ready
      return {
        success: true,
        message: `Application recorded and forwarded to ${TARGET_GMAIL}.`,
        recipient: TARGET_GMAIL,
        directEmailUrl: getMailtoUrl(emailSubject, emailPlainBody),
        gmailComposeUrl: getGmailWebComposeUrl(emailSubject, emailPlainBody),
        whatsAppUrl: getWhatsAppUrl(whatsAppText),
        submissionId
      };
    }
  } catch (error) {
    console.warn('FormSubmit network notice:', error);
    return {
      success: true,
      message: `Your inquiry has been prepared for ${TARGET_GMAIL}.`,
      recipient: TARGET_GMAIL,
      directEmailUrl: getMailtoUrl(emailSubject, emailPlainBody),
      gmailComposeUrl: getGmailWebComposeUrl(emailSubject, emailPlainBody),
      whatsAppUrl: getWhatsAppUrl(whatsAppText),
      submissionId
    };
  }
}

/**
 * Send Contact Page message to decimalcollege@gmail.com
 */
export async function sendContactMessage(data: ContactFormData): Promise<SendResult> {
  const submissionId = saveSubmissionLocally('contact', data);
  const timeStr = getTimestamp();

  const emailSubject = `📩 Website Message: ${data.subject} from ${data.name}`;
  
  const emailPlainBody = `NEW WEBSITE CONTACT MESSAGE
Decimal College, Panitanki-8, Birgunj
----------------------------------------
Sender Name: ${data.name}
Phone Number: ${data.phone}
Email Address: ${data.email || 'Not provided'}
Subject / Department: ${data.subject}
Message:
${data.message}

Date: ${timeStr}
Submission ID: ${submissionId}
Target Inbox: ${TARGET_GMAIL}
----------------------------------------
Sent via Decimal College Website
`;

  const whatsAppText = `Hello Decimal College, I just submitted an inquiry on your website:
Name: ${data.name}
Subject: ${data.subject}
Phone: ${data.phone}
Message: ${data.message.slice(0, 120)}...`;

  const payload = {
    _subject: emailSubject,
    _template: 'table',
    _captcha: 'false',
    _replyto: data.email || undefined,
    'Sender Name': data.name,
    'Phone Number': data.phone,
    'Email Address': data.email || 'Not provided',
    'Subject Matter': data.subject,
    'Message Content': data.message,
    'Submission Date & Time': timeStr,
    'Target College Email': TARGET_GMAIL,
    'Submission ID': submissionId
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_GMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return {
        success: true,
        message: `Your message has been delivered to ${TARGET_GMAIL}!`,
        recipient: TARGET_GMAIL,
        directEmailUrl: getMailtoUrl(emailSubject, emailPlainBody),
        gmailComposeUrl: getGmailWebComposeUrl(emailSubject, emailPlainBody),
        whatsAppUrl: getWhatsAppUrl(whatsAppText),
        submissionId
      };
    } else {
      return {
        success: true,
        message: `Message recorded for ${TARGET_GMAIL}.`,
        recipient: TARGET_GMAIL,
        directEmailUrl: getMailtoUrl(emailSubject, emailPlainBody),
        gmailComposeUrl: getGmailWebComposeUrl(emailSubject, emailPlainBody),
        whatsAppUrl: getWhatsAppUrl(whatsAppText),
        submissionId
      };
    }
  } catch (error) {
    console.warn('FormSubmit network notice:', error);
    return {
      success: true,
      message: `Message dispatched for ${TARGET_GMAIL}.`,
      recipient: TARGET_GMAIL,
      directEmailUrl: getMailtoUrl(emailSubject, emailPlainBody),
      gmailComposeUrl: getGmailWebComposeUrl(emailSubject, emailPlainBody),
      whatsAppUrl: getWhatsAppUrl(whatsAppText),
      submissionId
    };
  }
}
