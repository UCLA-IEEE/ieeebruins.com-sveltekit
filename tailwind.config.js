/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				ieeebruins: {
					primary: '#00629B',
					secondary: '#E4C63F',
					accent: '#00D595',
					neutral: '#3D4451',
					'base-100': '#E3E4E4',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['Work Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('daisyui')]
};
