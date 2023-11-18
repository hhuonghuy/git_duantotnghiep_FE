import axios from 'axios';

export const instance = axios.create({
	// Configuration
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 8000,
});
