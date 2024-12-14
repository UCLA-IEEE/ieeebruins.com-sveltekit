<script lang="ts">
	import SponsorCard from '$lib/components/sponsors/SponsorCard.svelte';
	import SponsorSection from '$lib/components/sponsors/SponsorSection.svelte';
	import brochure from '$lib/files/SponsorshipBrochure2025.pdf';

	const tiers = [
		{
			title: 'WORKSHOP',
			price: '$500',
			bg_color: 'bg-primary',
			key: 1,
			benefits: ['Sponsor a workshop/info session', 'Recruit from a large, targeted audience']
		},
		{
			title: 'PROJECT',
			price: '$500',
			bg_color: 'bg-primary',
			key: 2,
			benefits: [
				'Logo on project shirt',
				'Access to project specific resume book',
				'Sponsor a competition',
				'Project-specific info session/recruiting session',
				'Mentorship opportunities',
				'Projects showcase invitation'
			]
		},
		{
			title: 'BRONZE',
			price: '$1500-2499',
			bg_color: 'bg-[#CD7F32]',
			key: 3,
			benefits: [
				'*One info session or workshop hosted by IEEE at UCLA',
				'*Logo on website and weekly newsletter'
			]
		},
		{
			title: 'SILVER',
			price: '$2500-3499',
			bg_color: 'bg-gray-400',
			key: 4,
			benefits: [
				'One info session or workshop hosted by IEEE at UCLA',
				'Logo on website and weekly newsletter',
				'*Tabling slot for All-American Micromouse Competition and end-of-year Projects Showcase',
				'*Resume book'
			]
		},
		{
			title: 'GOLD',
			price: '$3500+',
			bg_color: 'bg-secondary',
			key: 5,
			benefits: [
				'One info session or workshop hosted by IEEE at UCLA',
				'Logo on website and weekly newsletter',
				'Tabling slot for All-American Micromouse Competition and end-of-year Projects Showcase',
				'Resume book',
				'*End-of-year IEEE officer banquet invitation',
				'*Recruiting post in weekly newsletter (1000+ people)'
			]
		}
	];
</script>

<div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg">
	<SponsorSection />
	<p class="mb-2">
		We would like to thank our sponsors for their invaluable support in supporting our year-long
		projects, supplementary programs, parts for these projects, and essential hands-on experience to
		complement ECE coursework!
	</p>
	<h1 class="text-lg font-bold">Benefits of Sponsoring</h1>
	<ul class="mb-4 ml-8 list-decimal">
		<li>
			Priority status and multiple events (info-sessions, tech-talks, etc.) per year (as per
			package)
		</li>
		<li>Priority access to award winning event organization, management and publicity</li>
		<li>Advertising your job/internship openings through us</li>
		<li>Reaching out to 1000+ mailing list members and 400+ club members for publicity</li>
		<li>Getting involved with one of the largest engineering student groups in UCLA</li>
		<li>Being advertised at various state-wide engineering competitions</li>
		<li>Being a generous contributor to the development of young engineers</li>
		<li>
			Getting all this for free! <b>Donations to us are tax-deductible</b>
		</li>
	</ul>
	<h1 class="mb-2 text-lg font-bold">Becoming a Sponsor</h1>
	<div class="flex flex-wrap gap-4">
		{#each tiers as tierInfo}
			<SponsorCard data={tierInfo} />
		{/each}
	</div>
	<p class="my-2">
		For more information, download our sponsorshop brochure <a
			class="font-bold text-primary hover:opacity-50"
			href={brochure}
			target="_blank">here</a
		>!<br />
		Contact our current corporate relations officer at
		<a href="mailto:corporate@ieeebruins.com">corporate@ieeebruins.com</a>
		for more information.
	</p>

	<br />
</div>
