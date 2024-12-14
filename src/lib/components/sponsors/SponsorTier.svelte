<script lang="ts">
	export let data;
</script>

<div class="">
	{#each data.company_info as company_info}
		<div class="h-48">
			<a href={company_info.url} target="_blank">
				<img class="max-w-48" src={company_info.img} alt="{company_info.name} Logo" />
			</a>
		</div>
	{/each}
</div>
