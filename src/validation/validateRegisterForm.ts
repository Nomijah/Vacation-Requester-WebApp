export const validateRegisterForm = (formData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}): string[] => {
  const errors: string[] = [];

  if (!formData.email.includes("@")) {
    errors.push("Invalid email address.");
  }

  if (formData.password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  if (!formData.firstName) {
    errors.push("First name is required.");
  }

  if (!formData.lastName) {
    errors.push("Last name is required.");
  }

  return errors;
};
