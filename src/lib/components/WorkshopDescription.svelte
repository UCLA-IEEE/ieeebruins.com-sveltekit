<script lang="ts">
	import Header from '$lib/components/Header.svelte';

	export let data;
</script>

<div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg">
	<Header text={data.workshop_name} />
	<div class="divider divider-secondary max-w-sm">{data.date}</div>
	<p class="mb-2">
		{data.description}
	</p>
	<div class="flex max-sm:flex-wrap">
		<iframe
			class="h-[300px] w-full sm:w-1/2"
			src={data.video_url}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<iframe
			class="h-[300px] w-full sm:w-1/2"
			title="{data.workshop_name} Slides"
			src={data.slides_url}
			frameborder="0"
		/>
	</div>
	<br />
</div>
