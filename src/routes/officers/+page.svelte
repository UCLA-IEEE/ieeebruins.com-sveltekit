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
				position: 'President',
				description:
					'Hello! I am a 4th year CS student. My main academic passions are ethical AI and applications of AI with a humanistic perspective. I love to read, write, cook, eat, and try new things. Feel free to reach out if you have any questions!'
			},
			{
				name: 'Rachel Yen',
				img_src: rachel,
				position: 'IVP',
				description:
					"hi! I'm third year EE major with a strong passion for eating. I'm currently in the field of circuits, but I'm also interested in computer architecture! DM me if you ever want to hang out and get a sweet treat or just yap :)"
			},
			{
				name: 'Eugenia Cho',
				img_src: eugenia,
				position: 'EVP'
			},
			{
				name: 'Evan Bird',
				img_src: evan,
				position: 'EVP',
				description:
					"Hey y'all! Im a fourth year EE major who likes getting outdoors, music (both listening and performance), and eating at new food/coffee spots. Holler at me if you want to chat :)"
			},
			{
				name: 'Jace Fang',
				img_src: jace,
				position: 'Treasurer'
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
				position: 'Secretary',
				description:
					"Hi everyone! I'm a fourth year computer engineering major and am minoring in Asian Languages (Korean). Outside of class I love writing poetry, learning languages/linguistics, drinking coffee, and eating really spicy food. Feel free to say hi if you see me around! :)"
			},
			{
				name: 'Heidi Hu',
				img_src: heidi,
				position: 'Publicity',
				description: 'hi -d'
			},
			{
				name: 'Emily Lu',
				img_src: emilyl,
				position: 'Events Coordinator'
			},
			{
				name: 'Amy Zhao',
				img_src: amy,
				position: 'Events Coordinator & IE Chair'
			},
			{
				name: 'Ethan Lai',
				img_src: ethan,
				position: 'Outreach Coordinator',
				description: 'w0w'
			},
			{
				name: 'Joshua Burpee',
				img_src: joshua,
				position: 'Outreach Coordinator'
			},
			{
				name: 'Kevin Zhang',
				img_src: kevin,
				position: 'Webmaster',
				description: "To know what you know and to know what you don't know is to know. "
			}
		]
	};

	const projects_panel_info = {
		title: 'Projects Board',
		officers: [
			{
				name: 'Noosha Rahimi',
				img_src: noosha,
				position: 'OPS Lead',
				description:
					"Hi! I'm a second year computer engineering student.I love trying new coffee shops, going to the beach, and yoga! If you ever see me on campus, please say hi! "
			},
			{
				name: 'Wyatt Grover',
				img_src: wyatt,
				position: 'OPS Lead',
				description:
					"Hi! I'm a 2nd year computer engineering student who loves movies, music, and cartoons, I'm always down to yap about anything and everything!"
			},
			{
				name: 'Nathan Chen',
				img_src: nathan,
				position: 'Micromouse Lead',
				description: 'Hello!'
			},
			{
				name: 'Michael Ward',
				img_src: michael,
				position: 'Micromouse Lead',
				description: 'trolled'
			},
			{
				name: 'Holden Grissett',
				img_src: holden,
				position: 'Donkey Racers Lead',
				description:
					"Hey friends - I'm Holden and I'm a final year transfer CS major. I also love Physics ❤️ and cats. Ask me about my chameleon."
			},
			{
				name: 'Jerard Agravante',
				img_src: jerard,
				position: 'Donkey Racers Lead',
				description: 'I love Victor'
			},
			{
				name: 'Adrian Rozario',
				img_src: adrian,
				position: 'DAV Lead',
				description: 'The results were astounding! Absolutely nothing happened.'
			},
			{
				name: 'Bryan Liu',
				img_src: bryan,
				position: 'DAV Lead',
				description: 'DAV on the haters'
			},
			{
				name: 'Nat Nguyendinh',
				img_src: nat,
				position: 'WRAP Lead',
				description: 'bet'
			},
			{
				name: 'Victor Zhang',
				img_src: victor,
				position: 'WRAP Lead',
				description: 'I love Jerard'
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
				name: 'Sanjit Sarda',
				img_src: sanjit,
				position: 'Research and Development',
				description: 'I like C̴̙̹͐̐̓̈͛͜ḧ̵̠̦́͌̽͒͗̕ę̸̤̖͎̗̜̘̯͇̱̮͔̌̾͌̈͌̈́͊̕e̷̢̖͇̲̥̤̺̜̞̼̤̓̏̍̄͌̉̚͘͘͠s̸͎̖̭̼̠̗̬̻̣̼̯͕̈́̂̽̈́̂̆͂̓͂͘̚͘͜͝͠ę̸̢̟̞͓͍͕̺̜͖͖͖͇̿̌̃̆͗͊͛͑̈́̏́̃̕͜͠ '
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
