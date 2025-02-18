<script>
	import OfficerCard from '$lib/components/OfficerCard.svelte';
	import Header from '$lib/components/Header.svelte';
	export let boardInfo;
</script>

<div class="mx-auto my-10 w-10/12 p-5">
	<h1 class="mx-auto mb-5 text-center text-3xl font-bold">{boardInfo.title}</h1>

	<div class="flex flex-wrap justify-center gap-x-10 gap-y-7">
		{#each boardInfo.officers as officerInfo}
			<OfficerCard {officerInfo} />
		{/each}
	</div>
</div>
