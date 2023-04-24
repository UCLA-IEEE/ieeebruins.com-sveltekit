<script lang="ts">
	import '../app.css';

	import NavList from './NavList.svelte';
	import { Menu, ChevronDown, ChevronRight } from 'lucide-svelte';
</script>

<div class="drawer">
	<input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Desktop navbar -->
		<div class="navbar outline outline-primary">
			<!-- IEEE at UCLA icon -->
			<div class="navbar-start">
				<a href="/" class="btn btn-ghost normal-case text-2xl p-2">IEEE at UCLA</a>
			</div>

			<!-- Desktop navigation list -->
			<div class="navbar-end hidden lg:flex">
				<ul class="menu menu-horizontal bg-base-100 p-2">
					<NavList dropdownIcon={ChevronDown} />
				</ul>
			</div>

			<!-- Menu button to toggle sidebar, only shown on mobile -->
			<div class="navbar-end lg:hidden">
				<label for="navbar-drawer" class="btn btn-square btn-ghost">
					<Menu />
				</label>
			</div>
		</div>

		<!-- Page content -->
		<slot />
	</div>

	<!-- Mobile sidebar -->
	<div class="drawer-side">
		<label for="navbar-drawer" class="drawer-overlay" />
		<ul class="menu bg-base-100 p-2 w-1/4">
			<NavList dropdownIcon={ChevronRight} />
		</ul>
	</div>
</div>
