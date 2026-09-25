import argon2 from "argon2";

function validatePassword(password: string): string {
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long.");
  }

  if (!/\d/.test(password)) {
    throw new Error("Password must include at least one number.");
  }

  if (!/[A-Z]/.test(password)) {
    throw new Error("Password must include at least one uppercase letter.");
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    throw new Error("Password must include at least one special character.");
  }

  return password;
}

export async function hashPassword(password: string): Promise<string> {
  const validatedPassword = validatePassword(password);
  const hashedPassword = await argon2.hash(validatedPassword);
  return hashedPassword;
}

export function validateAndNormalizeEmail(email: string): string {
  if (!email) {
    throw new Error("Email has no value");
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  if (!isValidEmail) {
    throw new Error("Invalid email.");
  }

  return email.toLowerCase().trim();
}

export async function verifyPassword(password: string, hashedPasswordFromDb: string): Promise<boolean> {
  const validatedPassword = validatePassword(password);
  const isMatch = await argon2.verify(hashedPasswordFromDb, validatedPassword);

  if (!isMatch) {
    throw new Error("The input password did not match the passwords in the Database.");
  }

  return isMatch;
}