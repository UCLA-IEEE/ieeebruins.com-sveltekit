<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	export let data;
</script>

<div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg" id={data.nav_id}>
	<Header text={data.title} />

	<p class="mb-2">
		{data.description}
	</p>

	{#if data.website}
		<a class="btn btn-primary btn-sm" href={data.website} target="_blank">Website</a>
	{/if}
	<br />

	<div class="carousel mt-4 max-w-3xl rounded-box">
		{#each data.images as img}
			<div class="carousel-item w-1/2">
				<img src={img} alt="outreach" class="object-cover" />
			</div>
		{/each}
	</div>
</div>
