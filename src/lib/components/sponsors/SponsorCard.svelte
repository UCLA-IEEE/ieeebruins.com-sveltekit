<script lang="ts">
	export let data;

	let isModalOpen = false;
</script>

<button
	on:click={() => (isModalOpen = true)}
	class="inline-block {data.bg_color} glass w-48 rounded-md p-4 text-white hover:opacity-50"
>
	<h1 class="font-bold">{data.title}</h1>
	<p>{data.price}</p>
</button>

<div class="modal" class:modal-open={isModalOpen}>
	<div class="modal-box {data.bg_color} glass text-white">
		<h3 class="text-lg font-bold">Benefits:</h3>
		<ul class="list-disc p-4">
			{#each data.benefits as benefit}
				{#if benefit[0] === '*'}
					<li class="font-bold">{benefit.slice(1)}</li>
				{:else}
					<li>{benefit}</li>
				{/if}
			{/each}
		</ul>
		<div class="modal-action">
			<button class="btn bg-white" on:click={() => (isModalOpen = false)}>OK</button>
		</div>
	</div>
</div>
