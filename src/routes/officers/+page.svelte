<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import OfficerPanel from '$lib/components/OfficerPanel.svelte';

	// EXEC BOARD
	import theo from '$lib/images/officers/theo.jpg';
	import rachel from '$lib/images/officers/rachel.jpg';
	import eugenia from '$lib/images/officers/eugenia.jpg';
	import evan from '$lib/images/officers/evan.jpg';
	import jace from '$lib/images/officers/jace.jpg';

	// ADMIN BOARD
	import jerry from '$lib/images/officers/jerry.jpg';
	import emilyk from '$lib/images/officers/emilyk.jpg';
	import heidi from '$lib/images/officers/heidi.jpg';
	import emilyl from '$lib/images/officers/emilyl.jpg';
	import amy from '$lib/images/officers/amy.jpg';
	import ethan from '$lib/images/officers/ethan.jpg';
	import joshua from '$lib/images/officers/joshua.jpg';
	import kevin from '$lib/images/officers/kevin.jpg';

	// PROJECTS BOARD
	import noosha from '$lib/images/officers/noosha.jpg';
	import wyatt from '$lib/images/officers/wyatt.jpg';
	import michael from '$lib/images/officers/michael.jpg';
	import nathan from '$lib/images/officers/nathan.jpg';
	import holden from '$lib/images/officers/holden.jpg';
	import jerard from '$lib/images/officers/jerard.jpg';
	import adrian from '$lib/images/officers/adrian.jpg';
	import bryan from '$lib/images/officers/bryan.jpg';
	import nat from '$lib/images/officers/nat.jpg';
	import victor from '$lib/images/officers/victor.jpg';
	import jessie from '$lib/images/officers/jessie.jpg';
	import kai from '$lib/images/officers/kai.jpg';
	import prem from '$lib/images/officers/prem.jpg';
	import parth from '$lib/images/officers/parth.jpg';
	import sanjit from '$lib/images/officers/sanjit.jpg';

	const exec_panel_info = {
		title: 'Executive Board',
		officers: [
			{
				name: 'Theo Zhang',
				img_src: theo,
				position: 'President'
			},
			{
				name: 'Rachel Yen',
				img_src: rachel,
				position: 'IVP'
			},
			{
				name: 'Eugenia Cho',
				img_src: eugenia,
				position: 'EVP'
			},
			{
				name: 'Evan Bird',
				img_src: evan,
				position: 'EVP'
			},
			{
				name: 'Jace Fang',
				img_src: jace,
				position: 'EVP'
			}
		]
	};

	const admin_panel_info = {
		title: 'Admin Board',
		officers: [
			{
				name: 'Jerry Fang',
				img_src: jerry,
				position: 'Corporate Relations'
			},
			{
				name: 'Emily Kuczynski',
				img_src: emilyk,
				position: 'Secretary'
			},
			{
				name: 'Heidi Hu',
				img_src: heidi,
				position: 'EVP'
			},
			{
				name: 'Emily Lu',
				img_src: emilyl,
				position: 'Events Coordinator'
			},
			{
				name: 'Amy Zhao',
				img_src: amy,
				position: 'Events Coordinator & EDI Chair'
			},
			{
				name: 'Ethan Lai',
				img_src: ethan,
				position: 'Outreach Coordinator'
			},
			{
				name: 'Joshua Burpee',
				img_src: joshua,
				position: 'Outreach Coordinator'
			},
			{
				name: 'Kevin Zhang',
				img_src: kevin,
				position: 'Webmaster'
			}
		]
	};

	const projects_panel_info = {
		title: 'Projects Board',
		officers: [
			{
				name: 'Noosha Rahimi',
				img_src: noosha,
				position: 'OPS Lead'
			},
			{
				name: 'Wyatt Grover',
				img_src: wyatt,
				position: 'OPS Lead'
			},
			{
				name: 'Nathan Chen',
				img_src: nathan,
				position: 'Micromouse Lead'
			},
			{
				name: 'Michael Ward',
				img_src: michael,
				position: 'Micromouse Lead'
			},
			{
				name: 'Holden Grissett',
				img_src: holden,
				position: 'Pocket Racers Lead'
			},
			{
				name: 'Jerard Agravante',
				img_src: jerard,
				position: 'Pocket Racers Lead'
			},
			{
				name: 'Adrian Rozario',
				img_src: adrian,
				position: 'DAV Lead'
			},
			{
				name: 'Bryan Liu',
				img_src: bryan,
				position: 'DAV Lead'
			},
			{
				name: 'Nat Nguyendinh',
				img_src: nat,
				position: 'WRAP Lead'
			},
			{
				name: 'Victor Zhang',
				img_src: victor,
				position: 'WRAP Lead'
			},
			{
				name: 'Jessie Chan',
				img_src: jessie,
				position: 'Workshops Manager'
			},
			{
				name: 'Kai Wang',
				img_src: kai,
				position: 'Workshops Manager'
			},
			{
				name: 'Parth Pandhare',
				img_src: parth,
				position: 'Projects and Lab Manager'
			},
			{
				name: 'Premkumar Giridhar',
				img_src: prem,
				position: 'Projects and Lab Manager'
			},
			{
				name: 'Sanjit',
				img_src: sanjit,
				position: 'Research and Development'
			}
		]
	};

	const allofBoard = [exec_panel_info, admin_panel_info, projects_panel_info];
</script>

<div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg">
	<Header text="Officers" />
	<p class="mb-2">
		Our officer board does everything from handling corporate contacts, to teaching our year-long
		projects, to planning memorable events, and more.
	</p>
</div>

{#each allofBoard as boardInfo}
	<OfficerPanel {boardInfo} />
{/each}
