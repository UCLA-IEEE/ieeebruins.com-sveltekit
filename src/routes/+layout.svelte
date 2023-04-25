<script lang="ts">
	import '../app.css';

	import IeeeLogo from '../lib/components/IeeeLogo.svelte';

	import NavList from './NavList.svelte';
	import { Menu, ChevronDown, ChevronRight } from 'lucide-svelte';
</script>

<!-- Navbar for desktop, sidebar for mobile -->
<div class="drawer">
	<input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Desktop navbar -->
		<div class="navbar absolute max-w-screen-lg self-center mt-5 px-5 rounded">
			<!-- IEEE at UCLA icon -->
			<div class="navbar-start">
				<a
					role="button"
					href="/"
					class="btn btn-primary btn-md normal-case text-2xl gap-2 text-base-100 drop-shadow-lg drop-shadow-base-100"
				>
					<IeeeLogo color={'#ffffff'} className={'w-8 h-8'} />
					<span> IEEE at UCLA </span>
				</a>
			</div>

			<!-- Desktop navigation list -->
			<div class="justify-end hidden lg:flex dropdown dropdown-end">
				<ul class="menu menu-horizontal p-2 gap-2">
					<NavList dropdownIcon={ChevronDown} />
				</ul>
			</div>

			<!-- Menu button to toggle sidebar, only shown on mobile -->
			<div class="navbar-end lg:hidden">
				<label for="navbar-drawer" class="btn btn-primary btn-circle">
					<Menu color={'#ffffff'} />
				</label>
			</div>
		</div>

		<!-- Page content -->
		<slot />
	</div>

	<!-- Mobile sidebar -->
	<div class="drawer-side">
		<label for="navbar-drawer" class="drawer-overlay backdrop-blur" />
		<ul class="menu bg-base-200 p-2 w-1/4 gap-2">
			<NavList dropdownIcon={ChevronRight} />
		</ul>
	</div>
</div>
