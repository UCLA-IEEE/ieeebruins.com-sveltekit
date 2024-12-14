<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import SponsorTier from '$lib/components/sponsors/SponsorTier.svelte';

	import intel_logo from '$lib/images/sponsors/intel.svg';

	import sce_logo from '$lib/images/sponsors/southern_california_edison.svg';
	import lockheedmartin_logo from '$lib/images/sponsors/lockheed_martin.svg';
	import boeing_logo from '$lib/images/sponsors/boeing.svg';
	import ti_logo from '$lib/images/sponsors/texas_instruments.svg';
	import { stringify } from 'postcss';

	const sponsors = [
		{
			tier: 'Silver',
			company_info: [
				{
					name: 'Intel',
					img: intel_logo,
					url: 'https://www.intel.com/content/www/us/en/homepage.html'
				}
			]
		},
		{
			tier: 'Bronze',
			company_info: [
				{ name: 'Southern California Edison', img: sce_logo, url: 'https://www.sce.com/' },
				{
					name: 'Lockheed Martin',
					img: lockheedmartin_logo,
					url: 'https://www.lockheedmartin.com/'
				},
				{ name: 'Boeing', img: boeing_logo, url: 'https://www.boeing.com/' },
				{ name: 'Texas Instruments', img: ti_logo, url: 'https://www.ti.com/' }
			]
		}
	];
</script>

<Header text="Sponsors" />
{#each sponsors as sponsor}
	<SponsorTier data={sponsor} />
{/each}
