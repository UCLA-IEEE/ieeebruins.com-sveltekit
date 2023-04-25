<script>
	import ops from '$lib/images/ops.jpg';
	import IeeeLogo from '../lib/components/IeeeLogo.svelte';
</script>

<div class="hero min-h-screen" style="background-image: url({ops})">
	<div class="hero-overlay bg-opacity-50" />
	<div class="hero-content text-center">
		<div class="max-w-max">
			<h1 class="flex gap-8 text-9xl text-base-100 font-black m-10 bg-primary bg-opacity-80 p-2">
				<IeeeLogo color="#ffffff" className="w-32 h-32" />
				<span> IEEE at UCLA </span>
			</h1>
			<h2 class="text-5xl text-base-100 font-bold">
				<span class="bg-primary"> Hands-On Engineering </span>
			</h2>
		</div>
	</div>
</div>

<div class="text-9xl">more stuff lol</div>

<style>
	#based-logo {
		background: linear-gradient(-45deg, hsl(var(--p)), hsl(var(--s)), hsl(var(--a)), #23d5ab);
		background-clip: content-box;
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
	}

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
