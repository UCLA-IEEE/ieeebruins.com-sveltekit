<script>
	export let officerInfo;
</script>

<div class=" h-full rounded-2xl bg-primary">
	<div class="absolute w-56 p-4 drop-shadow-md">
		<p class=" text-white">
			"{officerInfo.description
				? officerInfo.description
				: 'I am very cool with a lot of friends.'}"
		</p>
	</div>
	<div role="tooltip" class="card w-56 bg-primary shadow-xl hover:opacity-30 hover:blur-sm">
		<figure class="">
			<img src={officerInfo.img_src} alt={officerInfo.name} class="h-56 w-56 object-cover" />
		</figure>
		<div class="card-body items-center text-center text-white">
			<h2 class="font-bold">{officerInfo.name}</h2>
			<h2 class="">{officerInfo.position}</h2>
		</div>
	</div>
</div>
