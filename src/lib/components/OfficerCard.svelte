<script>
	export let officerInfo;
</script>

<div role="tooltip" class="card w-56 bg-gray-100 bg-opacity-10 shadow-xl">
	<figure class="px-5 pt-5">
		<img
			src={officerInfo.img_src}
			alt={officerInfo.name}
			class="h-48 w-48 rounded-3xl object-cover"
		/>
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="font-bold">{officerInfo.name}</h2>
		<h2 class="">{officerInfo.position}</h2>
	</div>
</div>
