<!-- @component
Call to action button
 -->

<script lang="ts">
	import SimpleIcon from '$lib/components/SimpleIcon.svelte';

	export let href: string;
	export let color: string;
	export let iconSlug: string;
	export let text: string;
</script>

<a
	role="button"
	{href}
	class={`btn btn-primary border-[${color}] bg-[${color}] gap-2 max-w-fit`}
	target="_blank"
	rel="noopener noreferrer"
>
	<SimpleIcon {iconSlug} size={24} />
	{text}
</a>
