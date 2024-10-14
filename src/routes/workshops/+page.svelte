<script>
	import WorkshopDescription from '$lib/components/WorkshopDescription.svelte';
	const workshops = [
		{
			workshop_name: 'Matlab Workshop',
			date: 'March 9, 2023',
			description:
				'This MATLAB workshop is guaranteed to help you succeed in courses like 133A, 131A, and 132A. We will be going through the fundamentals of MATLAB, as well as showing you demos and providing extensions for you to practice during your own time.',
			video_url: 'https://www.youtube-nocookie.com/embed/b0yWAR0rjNk',
			slides_url:
				'https://docs.google.com/presentation/d/e/2PACX-1vSXRPcvgOwZ6nfI45UijM3f1tlb1GxYTYbIgYFV6kizt4GNFGXbVqP552_U-88vIeejIIA_YTNr05uO/embed?start=false&loop=false&delayms=3000'
		},
		{
			workshop_name: 'Basic Circuits Workshop',
			date: 'October 6, 2022',
			description:
				'If you want to get started with electrical engineering, you should first learn a little bit about electricity! We will start from the beginning with how electricity works, basic rules of circuits, and the most common components. Whether resistors, transistors, or LEDs, the behavior of electronic components will be clarified as you work hands-on with partners to build and test simple circuits.',
			video_url: 'https://www.youtube-nocookie.com/embed/5UpfCaU40ls',
			slides_url:
				'https://docs.google.com/presentation/d/e/2PACX-1vSPyk5N3Z0ANtVTgBMLYGkNpskvD4nI35q8QsAHH-4NWEYB4ubUHDlKIegEGLR7tO5Z2fCjr2UE8wsk/embed?start=false&loop=false&delayms=3000'
		}
	];
</script>

{#each workshops as workshop}
	<WorkshopDescription data={workshop} />
	<div class="divider divider-primary opacity-50" />
{/each}
