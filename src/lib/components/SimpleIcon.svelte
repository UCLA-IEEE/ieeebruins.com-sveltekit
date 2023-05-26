<script lang="ts">
	export let iconSlug: string;
	export let size: number;
</script>

<img
	alt={`${iconSlug} logo`}
	height={size}
	width={size}
	src={`https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${iconSlug}.svg`}
	class="invert"
/>
