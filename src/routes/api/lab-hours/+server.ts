import { json } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';

const SPREADSHEET_ID = '1esZ7bwd42nXYLt3g213FOMRtR1SbpdZyza3xhSwPAcg';
const API_BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
const HOURS_SHEET = 'Winter%202026'; // Note that %20 is the URL encoding for a space (" ")
const HOURS_OPTIONS = '/values/' + HOURS_SHEET + '!B3:G10?key=';
const SPECIAL_TAIL = '%20-%20Special%20Hours%20(for%20Bot%20purposes)';
const SPECIAL_SHEET = HOURS_SHEET + SPECIAL_TAIL;
const SPECIAL_OPTIONS = '/values/' + SPECIAL_SHEET + '!B3:G10?key=';
const ABILITIES_OPTIONS = '/values/Abilities!A2:C?key=';

export async function GET() {
	const abilitiesSheet = await fetch(
		`${API_BASE_URL}${SPREADSHEET_ID}${ABILITIES_OPTIONS}${API_KEY}`
	).then((response) => response.json());

	const hoursSheet = await fetch(`${API_BASE_URL}${SPREADSHEET_ID}${HOURS_OPTIONS}${API_KEY}`).then(
		(response) => response.json()
	);

	const specialSheet = await fetch(
		`${API_BASE_URL}${SPREADSHEET_ID}${SPECIAL_OPTIONS}${API_KEY}`
	).then((response) => response.json());

	const abilities = abilitiesSheet.values;
	const hours = hoursSheet.values;
	const special = specialSheet.values;

	// Assemble abilities object
	const classes: { [index: string]: string[] } = {};
	const checkoffs: { [index: string]: string[] } = {};

	abilities.forEach((row: string[]) => {
		classes[row[0]] =
			row[1] === undefined || row[1].trim() === '' ? [] : row[1].split('\n').map((c) => c.trim());
		checkoffs[row[0]] =
			row[2] === undefined || row[2].trim() === '' ? [] : row[2].split('\n').map((c) => c.trim());
	});

	return json({
		abilities: {
			classes,
			checkoffs
		},
		hours,
		special
	});
}
