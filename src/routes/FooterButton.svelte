<script lang="ts">
	export let href: string;
	export let alt: string;
	export let iconSlug: string;
</script>

<a role="button" {href} class="group btn btn-circle btn-outline">
	<img
		{alt}
		height="32"
		width="32"
		src={`https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${iconSlug}.svg`}
		class="group-hover:invert"
	/>
</a>
