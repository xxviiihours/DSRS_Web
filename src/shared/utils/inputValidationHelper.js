import * as yup from 'yup';

export const passwordValidator = yup
	.string()
	.required('Password is required')
	.min(8, 'Password must be at least 8 characters long')
	.matches(/[a-z]/, 'Password must include a lowercase letter')
	.matches(/[A-Z]/, 'Password must include an uppercase letter')
	.matches(/[0-9]/, 'Password must include at least one number')
	.matches(/[!@#$%^&*]/, 'Password must include a special character');

export const emailValidator = yup
	.string()
	.email('Enter a valid email address')
	.required('Email is required');

export const nameValidator = yup
	.string()
	.min(3, 'Name must be at least 3 characters minimum.')
	.max(30, 'Name must not exceed 30 characters long.');

export const confirmPasswordValidator = yup
	.string()
	.required('Please confirm your password')
	.oneOf([yup.ref('password')], 'Passwords must match');
