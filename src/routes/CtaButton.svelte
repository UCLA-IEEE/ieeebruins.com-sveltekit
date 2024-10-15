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
	class={`btn btn-primary border-[${color}] bg-[${color}] max-w-fit gap-2`}
	target="_blank"
	rel="noopener noreferrer"
>
	<SimpleIcon {iconSlug} size={24} />
	{text}
</a>
