<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import LabHours from '$lib/components/LabHours.svelte';
	import lab_map from '$lib/images/lab_map.png';
</script>

<div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg">
	<Header text="The IEEE Lab" />
	<p class="mb-2">
		Here at UCLA, we've been given a lab space that we use as our center of operations. The IEEE Lab
		is an open space for all general members to come in, work on their projects, meet new people,
		talk to present officers, or even just to chill and eat lunch.
	</p>
	<p class="mb-2">
		Although we'll primarily be using our physical lab, our <a
			href="https://discord.gg/yjSQjVb"
			class="text-primary">Discord server</a
		> is still operating as a virtual lab. Feel free to join the lab voice channel. Officers will be
		monitoring it during their lab hours.
	</p>
	<p class="mb-2">
		Our lab is located at Boelter 2825. The easiest way to find it is to go to the west side of 2nd
		floor Boelter (the lowest balcony). We are the second door down from the bridge to E-IV. The
		IEEE logo is posted on our door for easy locating.
	</p>

	<img src={lab_map} alt="lab map" class="w-full max-w-xl" />
</div>

<div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg">
	<Header text="Lab Hours" />
	<LabHours />
</div>
