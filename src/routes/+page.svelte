<script lang="ts">
	import CtaButton from './CtaButton.svelte';
	import { fly } from 'svelte/transition';

	let visible = false;

	import ops from '$lib/images/ops.jpg';

	import IeeeLogo from '$lib/components/IeeeLogo.svelte';
	import Header from '$lib/components/Header.svelte';
	import LabHours from '$lib/components/LabHours.svelte';

	setTimeout(() => (visible = true), 0);
</script>

<div
	class="mb-8 h-96 self-center bg-cover bg-center lg:mx-auto"
	style="background-image: url({ops});"
>
	<div class="flex h-full w-full flex-col justify-center bg-black bg-opacity-50">
		<div class="p-2 text-center text-white">
			{#if visible}
				<div in:fly={{ duration: 500, y: '50px' }}>
					<h1 class="mb-3 text-6xl font-bold">Hands-on Engineering</h1>
					<h3 class="text-3xl">UCLA's Premier Electrical Engineering Organization</h3>
				</div>
			{/if}
		</div>
	</div>
</div>

<div class="mx-4 my-8 flex max-w-screen-lg flex-col gap-4 self-center lg:mx-auto lg:flex-row">
	<div class="lg:w-1/2">
		<Header text="About Us" />
		<p class="mb-2">
			IEEE at UCLA is a professional student-run engineering organization. We devote our time and
			energy towards bringing hands-on, practical experiences to engineering students throughout
			UCLA, as well as create opportunities for students to interact with industry professionals and
			more.
		</p>
		<p>
			Every year we lead several projects for our members to participate in, where dedicated leads
			provide fundamental knowledge and skills to students, which helps them complete challenging
			and interesting projects throughout the year.
		</p>
	</div>
	<div class="lg:divider lg:divider-horizontal" />
	<div class="lg:w-1/2">
		<Header text="Get Involved" />
		<p class="mb-2">Keep up with all our upcoming events, workshops, and socials.</p>
		<div class="flex flex-wrap gap-4 self-center">
			<CtaButton
				href="https://discord.gg/RREtsea"
				iconSlug="discord"
				color="#5865F2"
				text="Discord"
			/>
			<CtaButton
				href="https://uclaieeenewsletter.substack.com/"
				iconSlug="substack"
				color="#FF6719"
				text="Newsletter"
			/>
			<CtaButton
				href="https://www.instagram.com/uclaieee/"
				iconSlug="instagram"
				color="#E4405F"
				text="Instagram"
			/>
		</div>
	</div>
</div>

<div class="mx-4 my-8 w-full self-center lg:mx-auto lg:max-w-screen-lg">
	<Header text="Events" />
	<p class="mb-2">
		We have a Google Calendar that is constantly being updated with our latest events. Click

		<a
			class="font-bold text-primary hover:text-black"
			href="https://calendar.google.com/calendar/u/0?cid=ZnBlaG5tczY1NTkxYjJhYXE2ZTc1MDN2dWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
			>here</a
		>
		to add it to your calendar!
	</p>
</div>

<div class="mx-4 my-8 w-full self-center lg:mx-auto lg:max-w-screen-lg">
	<Header text="Lab Hours" />
	<LabHours />
</div>

<style>
	/* #based-logo {
		background: linear-gradient(-45deg, hsl(var(--p)), hsl(var(--s)), hsl(var(--a)), #23d5ab);
		background-clip: content-box;
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
	} */

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
