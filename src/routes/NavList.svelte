<!--
  @component
  List of navigation links
 -->

<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let dropdownIcon: ComponentType;
</script>

<li>
	<a href="/about">
		About
		<svelte:component this={dropdownIcon} />
	</a>
	<ul class="bg-base-100 p-2 shadow">
		<li><a href="/officers">Officers</a></li>
		<li><a href="/edi">EDI</a></li>
	</ul>
</li>
<li><a href="/projects">Projects</a></li>
<li><a href="/workshops">Workshops</a></li>
<li><a href="/lab">Lab</a></li>
<li><a href="/sponsors">Sponsors</a></li>
