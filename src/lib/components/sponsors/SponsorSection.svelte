<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import SponsorTier from '$lib/components/sponsors/SponsorTier.svelte';

	import intel_logo from '$lib/images/sponsors/intel.svg';
	import northropgrumman_logo from '$lib/images/sponsors/northrop_grumman.svg';
	import sce_logo from '$lib/images/sponsors/southern_california_edison.svg';
	import rtx_logo from '$lib/images/sponsors/rtx.svg';
	import rivian_logo from '$lib/images/sponsors/rivian.svg';
	import lockheedmartin_logo from '$lib/images/sponsors/lockheed_martin.svg';
	import boeing_logo from '$lib/images/sponsors/boeing.svg';
	import ti_logo from '$lib/images/sponsors/texas_instruments.svg';
	import { stringify } from 'postcss';

	const sponsors = [
		// {
		// 	tier: 'Silver',
		// 	tierColor: 'gray-400',
		// 	company_info: [
		// 		{
		// 			name: 'Intel',
		// 			img: intel_logo,
		// 			url: 'https://www.intel.com/content/www/us/en/homepage.html'
		// 		},
		// 		{
		// 			name: 'Northrop Grumman',
		// 			img: northropgrumman_logo,
		// 			url: 'https://www.northropgrumman.com/'
		// 		}
		// 	]
		// },
		{
			tier: 'Bronze',
			tierColor: '[#CD7F32]',
			company_info: [
				{ name: 'Rivian', img: rivian_logo, url: 'https://www.rivian.com/' }
				// { name: 'RTX Corporation', img: rtx_logo, url: 'https://www.rtx.com/' },
				// { name: 'Southern California Edison', img: sce_logo, url: 'https://www.sce.com/' },
				// {
				// 	name: 'Lockheed Martin',
				// 	img: lockheedmartin_logo,
				// 	url: 'https://www.lockheedmartin.com/'
				// },
				// { name: 'Boeing', img: boeing_logo, url: 'https://www.boeing.com/' },
				// { name: 'Texas Instruments', img: ti_logo, url: 'https://www.ti.com/' }
			]
		}
	];
</script>

<Header text="Sponsors" />
{#each sponsors as sponsor}
	<SponsorTier data={sponsor} />
{/each}
