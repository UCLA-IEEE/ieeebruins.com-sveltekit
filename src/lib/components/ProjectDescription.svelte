<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { ExternalLink } from 'lucide-svelte';

	export let data;
</script>

<div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg" id={data.project_id}>
	<Header text={data.project_name} />
	<div class="divider divider-secondary max-w-sm">{data.slogan}</div>
	<p class="mb-2">
		{data.description}
	</p>

	{#if data.website}
		<a class="btn-primary btn-sm btn" href={data.website} target="_blank">Website</a>
	{/if}
	<br />

	<div class="carousel mt-4 w-full rounded-box">
		{#each data.images as img}
			<div class="carousel-item w-1/2">
				<img src={img} alt="project" class="object-cover" />
			</div>
		{/each}
	</div>
</div>
