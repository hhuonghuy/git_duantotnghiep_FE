import { instance } from '../configs/instance';

export const authApi = {
	/* login */
	login: async (body) => {
		const response = await instance.post('/login', body);
		return response;
	},

	/* register */
	register: async (body) => {
		const response = await instance.post('/register', body);
		return response;
	},
};
