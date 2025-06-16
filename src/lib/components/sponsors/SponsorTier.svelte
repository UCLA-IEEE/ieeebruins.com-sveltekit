<script lang="ts">
	export let data;
</script>

<div
	class="my-4 mr-4 flex flex-wrap gap-4 bg-{data.tierColor} glass relative rounded-md bg-opacity-30 p-8 dark:bg-opacity-100"
>
	<div
		class="absolute left-0 top-0 p-2 uppercase text-white bg-{data.tierColor} glass rounded-md font-bold tracking-widest"
	>
		{data.tier}
	</div>
	{#each data.company_info as company_info}
		<div class="flex min-h-20 w-48 flex-col items-center justify-center p-4">
			<a
				href={company_info.url}
				target="_blank"
				class="flex h-full max-h-12 w-full items-center justify-center"
			>
				<img
					class="inline-block max-h-12 object-contain"
					src={company_info.img}
					alt="{company_info.name} Logo"
				/>
			</a>
		</div>
	{/each}
</div>
