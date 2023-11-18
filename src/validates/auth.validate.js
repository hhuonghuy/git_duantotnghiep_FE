import * as yup from 'yup';

export const loginValidate = yup
	.object({
		email: yup.string().required('Email là bắt buộc!'),
		password: yup.string().required('Mật khẩu là bắt buộc!'),
	})
	.required();

export const registerValidate = yup.object({
	email: yup.string().required('Email là bắt buộc!'),
	password: yup.string().required('Mật khẩu là bắt buộc!'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Mật khẩu không khớp!')
		.required('Xác nhận mật khẩu là bắt buộc!'),
});
