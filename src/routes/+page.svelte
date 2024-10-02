<script lang="ts">
	import CtaButton from './CtaButton.svelte';

	import ops from '$lib/images/ops.jpg';
	import IeeeLogo from '$lib/components/IeeeLogo.svelte';
	import Header from '$lib/components/Header.svelte';
	import LabHours from '$lib/components/LabHours.svelte';
</script>

<div class="hero min-h-screen" style="background-image: url({ops})">
	<div class="hero-overlay bg-opacity-50" />
	<div class="hero-content text-center">
		<div class="max-w-max">
			<h1
				class="glass m-10 flex items-center gap-8 bg-primary bg-opacity-80 p-2 text-5xl font-black text-base-100 lg:text-9xl"
			>
				<IeeeLogo color="#ffffff" className="w-28 h-28" />
				<span> IEEE at UCLA </span>
			</h1>
			<h2 class="text-5xl font-bold text-base-100">
				<span class="bg-primary"> Hands-On Engineering </span>
			</h2>
		</div>
	</div>
</div>

<div class="mx-4 my-8 flex max-w-screen-lg flex-col gap-4 self-center lg:flex-row">
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
		<p class="mb-2 text-xl">Keep up with all our upcoming events, workshops, and socials.</p>
		<div class="flex flex-col gap-4 self-center">
			<CtaButton
				href="https://discord.gg/RREtsea"
				iconSlug="discord"
				color="#5865F2"
				text="Join our Discord"
			/>
			<CtaButton
				href="https://uclaieeenewsletter.substack.com/"
				iconSlug="substack"
				color="#FF6719"
				text="Subscribe to our newsletter"
			/>
			<CtaButton
				href="https://www.instagram.com/uclaieee/"
				iconSlug="instagram"
				color="#E4405F"
				text="Follow us on Instagram"
			/>
		</div>
	</div>
</div>

<div class="mx-4 my-8 flex w-full max-w-screen-lg flex-col self-center">
	<Header text="Events" />
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
