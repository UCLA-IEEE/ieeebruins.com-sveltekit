<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { ExternalLink } from 'lucide-svelte';
	import OutreachDescription from '$lib/components/OutreachDescription.svelte';

	import ops2_1 from '$lib/images/ops2_1.png';
	import ops2_2 from '$lib/images/ops2_2.png';
	import ccw1 from '$lib/images/ccw1.jpg';
	import ccw2 from '$lib/images/ccw2.jpg';
	import oe1 from '$lib/images/oe1.png';
	import oe2 from '$lib/images/oe2.png';

	const outreach_data = [
		{
			title: 'OPS 2.0',
			description:
				'OPS 2.0 is a program dedicated to teaching IEEE student branches how to run their own beginner-friendly technical project. Starting in 2010, the Open Project Space (OPS) was founded by Leo Szeto at UCLA with the intention of providing hands-on projects to solidify the knowledge developed through ECE coursework. The OPS program is designed to teach Electrical and Computer Engineering concepts to fledgling engineers through hardware and software lectures, worksessions and projects. Taking this to the next level, the OPS 2.0 program is designed to “teach the teacher” and onboard the OPS program at any university focused on developing technical experience for their members! Interested? Visit the website below!',
			website: 'https://openproject.space/about/#ops-at-your-school',
			images: [ops2_1, ops2_2],
			nav_id: 'ops2'
		},
		{
			title: 'Community College Workshops',
			description:
				'We have worked with El Camino, Pierce, and Cerritos College to organize technical workshops that teach the basics of electrical engineering and design. Our main goal with these workshops is to help prepare these students with the practical skills necessary to succeed as they continue on into their engineering journeys. If you are interested in learning more about these workshops, feel free to contact us at outreach@ieeebruins.com.',
			images: [ccw1, ccw2],
			nav_id: 'ccw'
		},
		{
			title: 'Outreach Events',
			description:
				'Another goal of the Outreach Committee is to inspire the young engineers in the surrounding communities and show the many places you can go within STEM. We love to be able to attend different events in various communities to help spread the word about engineering. Some different events that we have attended before include running booths at school STEM fairs, judging and providing technical assistance for hackathons, and hosting workshops at surrounding schools. If you would like to get into contact with IEEE at UCLA about potential collaborations, our inbox is always open at outreach@ieeebruins.com!',
			images: [oe1, oe2],
			nav_id: 'oe'
		}
	];
</script>

<div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg">
	<Header text="Outreach Committee" />
	<p class="mb-2">
		The goal of Outreach is to support the engineering communities around us through our various
		activities and programs such as our OPS 2.0 program, community college workshop series, or
		helping out with various local community events. Want to get in contact with us? If you are a
		UCLA student interested in joining the Outreach Committee or an outside organization inquiring
		about a potential collaboration please contact the Outreach Coordinators at
		outreach@ieeebruins.com
	</p>
</div>
<div class="divider divider-primary" />

{#each outreach_data as data}
	<OutreachDescription {data} />
{/each}
