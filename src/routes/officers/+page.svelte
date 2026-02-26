<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import OfficerPanel from '$lib/components/OfficerPanel.svelte';

	// EXEC BOARD
	import sanjit from '$lib/images/officers/sanjit.jpg';
	import rachel from '$lib/images/officers/rachel.jpg';
	import wyatt from '$lib/images/officers/wyatt.jpg';
	import heidi from '$lib/images/officers/heidi.jpg';
	import noosha from '$lib/images/officers/noosha.jpg';

	// ADMIN BOARD
	import matthew from '$lib/images/officers/matthew.jpg';
	import connor from '$lib/images/officers/connor.jpg';
	import aki from '$lib/images/officers/aki.jpg';
	import thomas from '$lib/images/officers/thomas.jpg';
	import brent from '$lib/images/officers/brent.jpg';
	import landon from '$lib/images/officers/landon.jpg';
	import joseph from '$lib/images/officers/joseph.jpg';
	import zach from '$lib/images/officers/zach.jpg';

	// PROJECTS BOARD
	import parth from '$lib/images/officers/parth.jpg';
	import jessie from '$lib/images/officers/jessie.jpg';
	import bryan from '$lib/images/officers/bryan.jpg';
	import willson from '$lib/images/officers/willson.jpg';
	import johnny from '$lib/images/officers/johnny.jpg';
	import safwa from '$lib/images/officers/safwa.jpg';
	import joshbrazao from '$lib/images/officers/joshbrazao.jpg';
	import kevinl from '$lib/images/officers/kevinl.jpg';
	import kevinxiao from '$lib/images/officers/kevinxiao.jpg';
	import kyle from '$lib/images/officers/kyle.jpg';
	import sparsh from '$lib/images/officers/sparsh.jpg';
	import jerard from '$lib/images/officers/jerard.jpg';
	import jonathan from '$lib/images/officers/jonathan.jpg';
	import francisco from '$lib/images/officers/francisco.jpg';
	import adrian from '$lib/images/officers/adrian.jpg';

	const exec_panel_info = {
		title: 'Executive Board',
		officers: [
			{
				name: 'Sanjit Sarda',
				img_src: sanjit,
				position: 'President'
			},
			{
				name: 'Heidi Hu',
				img_src: heidi,
				position: 'IVP'
			},
			{
				name: 'Wyatt Grover',
				img_src: wyatt,
				position: 'EVP'
			},
			{
				name: 'Noosha Rahimi',
				img_src: noosha,
				position: 'EVP'
			},
			{
				name: 'Rachel Yen',
				img_src: rachel,
				position: 'Treasurer'
			}
		]
	};

	const admin_panel_info = {
		title: 'Admin Board',
		officers: [
			{
				name: 'Matthew Chandler',
				img_src: matthew,
				position: 'Corporate Relations'
			},
			{
				name: 'Conor Clinton',
				img_src: connor,
				position: 'Secretary'
			},
			{
				name: 'Brent Grantham',
				img_src: brent,
				position: 'Publicity'
			},
			{
				name: 'Aki Subramaniam',
				img_src: aki,
				position: 'Events Coordinator'
			},
			{
				name: 'Thomas Le',
				img_src: thomas,
				position: 'Events Coordinator'
			},
			{
				name: 'Landon Archuleta',
				img_src: landon,
				position: 'Outreach Coordinator'
			},
			{
				name: 'Joseph Kung',
				img_src: joseph,
				position: 'Outreach Coordinator'
			},
			{
				name: 'Zach Fischer',
				img_src: zach,
				position: 'Webmaster',
				description: "To know what you know and to know what you don't know is to know. "
			}
		]
	};

	const projects_panel_info = {
		title: 'Projects Board',
		officers: [
			{
				name: 'Safwa Khan',
				img_src: safwa,
				position: 'OPS Lead'
			},
			{
				name: 'Joshua Brazao',
				img_src: joshbrazao,
				position: 'OPS Lead'
			},
			{
				name: 'Kevin Liu',
				img_src: kevinl,
				position: 'Micromouse Lead'
			},
			{
				name: 'Kevin Xiao',
				img_src: kevinxiao,
				position: 'Micromouse Lead'
			},
			{
				name: 'Kyle Pak',
				img_src: kyle,
				position: 'Donkey Racers Lead'
			},
			{
				name: 'Sparsh Johri',
				img_src: sparsh,
				position: 'Donkey Racers Lead'
			},
			{
				name: 'Jerard Agravante',
				img_src: jerard,
				position: 'DAV Lead'
			},
			{
				name: 'Jonathan Xue',
				img_src: jonathan,
				position: 'DAV Lead'
			},
			{
				name: 'Francisco Cardenas Beltran',
				img_src: francisco,
				position: 'WRAP Lead'
			},
			{
				name: 'Adrian Rozario',
				img_src: adrian,
				position: 'WRAP Lead'
			},
			{
				name: 'Willson Luo',
				img_src: willson,
				position: 'Workshops Manager'
			},
			{
				name: 'Johnny You',
				img_src: johnny,
				position: 'Workshops Manager'
			},
			{
				name: 'Jessie Chan',
				img_src: jessie,
				position: 'Projects and Lab Manager'
			},
			{
				name: 'Bryan Liu',
				img_src: bryan,
				position: 'Projects and Lab Manager'
			},
			{
				name: 'Parth Pandhare',
				img_src: parth,
				position: 'Research and Development'
			}
		]
	};

	const allofBoard = [exec_panel_info, admin_panel_info, projects_panel_info];
</script>

<!-- <div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg">
	<Header text="Officers" />
	<p class="mb-2">
		Our officer board does everything from handling corporate contacts, to teaching our year-long
		projects, to planning memorable events, and more.
	</p>
</div> -->

{#each allofBoard as boardInfo}
	<OfficerPanel {boardInfo} />
{/each}
