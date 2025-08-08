// src/utils/validateProfile.js

export function validateProfile(profile) {
  const errors = {};

  if (!profile.name || profile.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!profile.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
    errors.email = "Invalid email address";
  }

  if (!profile.budget || isNaN(profile.budget)) {
    errors.budget = "Budget must be a valid number";
  }

  // Add more validations as needed
  return errors;
}
