export const contactLimits = { name: 100, email: 254, message: 1500 } as const;

export type ContactFields = { name: string; email: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactFields(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();
  if (!name) errors.name = "Enter your name.";
  else if (name.length > contactLimits.name) errors.name = `Name must be ${contactLimits.name} characters or fewer.`;
  if (!email) errors.email = "Enter your email address.";
  else if (email.length > contactLimits.email || !emailPattern.test(email)) errors.email = "Enter a valid email address.";
  if (!message) errors.message = "Enter a message.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (message.length > contactLimits.message) errors.message = `Message must be ${contactLimits.message} characters or fewer.`;
  return errors;
}
