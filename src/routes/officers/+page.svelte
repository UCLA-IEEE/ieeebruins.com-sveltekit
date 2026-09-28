<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import OfficerPanel from '$lib/components/OfficerPanel.svelte';

	// EXEC BOARD
	import jessie from '$lib/images/officers/JessieChan.jpg';
	import joseph from '$lib/images/officers/JosephKung.jpg';
	import brent from '$lib/images/officers/BrentGrantham.jpg';
	import aki from '$lib/images/officers/AkiSubramaniam.jpg';
	import thomas from '$lib/images/officers/ThomasLe.jpg';

	// ADMIN BOARD
	import kevinXiao from '$lib/images/officers/KevinXiao.jpg';
	import simon from '$lib/images/officers/SimonAks.jpg';
	import neilKhan from '$lib/images/officers/NeilKhan.jpg';
	import jaemin from '$lib/images/officers/JaeminKwak.jpg';
	import wyatt from '$lib/images/officers/WyattGrover.jpg';
	import neilYang from '$lib/images/officers/NeilYang.jpg';
	import justin from '$lib/images/officers/JustinOh.jpg';
	import sophia from '$lib/images/officers/SophiaCoulsell.jpg';

	// PROJECTS BOARD
	import johnny from '$lib/images/officers/JohnnyYou.jpg';
	import kevinLiu from '$lib/images/officers/KevinLiu.jpg';
	import willson from '$lib/images/officers/WillsonLuo.jpg';
	import jeremy from '$lib/images/officers/JeremyChen.jpg';
	import levi from '$lib/images/officers/LeviLichtmaher.jpg';
	import zunaira from '$lib/images/officers/ZunairaKaisar.jpg';
	import connor from '$lib/images/officers/ConnorJulian.jpg';
	import james from '$lib/images/officers/JamesNguyen.jpg';
	import brandon from '$lib/images/officers/BrandonCrossman.jpg';
	import zachary from '$lib/images/officers/ZacharyJoseph.jpg';
	import parik from '$lib/images/officers/ParikMehta.jpg';
	import joshua from '$lib/images/officers/JoshuaBrazao.jpg';
	import jerry from '$lib/images/officers/JerryHuang.jpg';
	import chienMu from '$lib/images/officers/Chien-MuYang.jpg';
	import dyllan from '$lib/images/officers/DyllanGoldstein.jpg';

	const exec_panel_info = {
		title: 'Executive Board',
		officers: [
			{
				name: 'Jessie Chan',
				img_src: jessie,
				position: 'President'
			},
			{
				name: 'Joseph Kung',
				img_src: joseph,
				position: 'IVP'
			},
			{
				name: 'Brent Grantham',
				img_src: brent,
				position: 'EVP'
			},
			{
				name: 'Aki Subramaniam',
				img_src: aki,
				position: 'EVP',
				object_position: '50% 25%'
			},
			{
				name: 'Thomas Le',
				img_src: thomas,
				position: 'Treasurer'
			}
		]
	};

	const admin_panel_info = {
		title: 'Admin Board',
		officers: [
			{
				name: 'Kevin Xiao',
				img_src: kevinXiao,
				position: 'Corporate Relations'
			},
			{
				name: 'Simon Aks',
				img_src: simon,
				position: 'Secretary'
			},
			{
				name: 'Neil Khan',
				img_src: neilKhan,
				position: 'Events Coordinator'
			},
			{
				name: 'Jaemin Kwak',
				img_src: jaemin,
				position: 'Events Coordinator'
			},
			{
				name: 'Wyatt Grover',
				img_src: wyatt,
				position: 'Publicity'
			},
			{
				name: 'Neil Yang',
				img_src: neilYang,
				position: 'Outreach Coordinator'
			},
			{
				name: 'Justin Oh',
				img_src: justin,
				position: 'Outreach Coordinator'
			},
			{
				name: 'Sophia Coulsell',
				img_src: sophia,
				position: 'Webmaster'
			}
		]
	};

	const projects_panel_info = {
		title: 'Projects Board',
		officers: [
			{
				name: 'Johnny You',
				img_src: johnny,
				position: 'Research and Development'
			},
			{
				name: 'Kevin Liu',
				img_src: kevinLiu,
				position: 'Projects and Lab Manager'
			},
			{
				name: 'Willson Luo',
				img_src: willson,
				position: 'Projects and Lab Manager'
			},
			{
				name: 'Jeremy Chen',
				img_src: jeremy,
				position: 'Workshops Manager'
			},
			{
				name: 'Levi Lichtmaher',
				img_src: levi,
				position: 'Workshops Manager',
				object_position: '50% 30%'
			},
			{
				name: 'Zunaira Kaisar',
				img_src: zunaira,
				position: 'OPS Lead'
			},
			{
				name: 'Connor Julian',
				img_src: connor,
				position: 'OPS Lead'
			},
			{
				name: 'James Nguyen',
				img_src: james,
				position: 'Micromouse Lead'
			},
			{
				name: 'Brandon Crossman',
				img_src: brandon,
				position: 'Micromouse Lead',
				object_position: '50% 25%'
			},
			{
				name: 'Zachary Joseph',
				img_src: zachary,
				position: 'Donkey Racers Lead',
				object_position: '50% 30%'
			},
			{
				name: 'Parik Mehta',
				img_src: parik,
				position: 'Donkey Racers Lead'
			},
			{
				name: 'Joshua Brazao',
				img_src: joshua,
				position: 'DAV Lead',
				object_position: '50% 25%'
			},
			{
				name: 'Jerry Huang',
				img_src: jerry,
				position: 'DAV Lead'
			},
			{
				name: 'Chien-Mu Yang',
				img_src: chienMu,
				position: 'WRAP Lead'
			},
			{
				name: 'Dyllan Goldstein',
				img_src: dyllan,
				position: 'WRAP Lead'
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
