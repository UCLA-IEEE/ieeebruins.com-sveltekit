<!--
  @component
  List of navigation links
 -->

<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let dropdownIcon: ComponentType;
</script>

<li>
	<a href="/projects" role="button" class="btn text-base-100">Projects</a>
</li>
<li>
	<a href="/workshops" role="button" class="btn text-base-100">Workshops</a>
</li>
<li><a href="/lab" role="button" class="btn text-base-100">Lab</a></li>
<li>
	<a href="/sponsors" role="button" class="btn text-base-100">Sponsors</a>
</li>
<li>
	<button tabindex="0" class="btn text-base-100">
		<span>About</span>
		<svelte:component this={dropdownIcon} />
	</button>
	<ul class="dropdown-content gap-2 p-2 backdrop-blur-lg">
		<li>
			<a href="/officers" role="button" class="btn text-base-100">Officers</a>
		</li>
		<li>
			<a href="/edi" role="button" class="btn text-base-100">EDI</a>
		</li>
	</ul>
</li>

<style>
	/* a,
	button {
		filter: drop-shadow(0.05rem 0.05rem 0 hsl(var(--s)));
	} */
</style>
