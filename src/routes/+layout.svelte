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
		<div class="navbar z-50 absolute max-w-screen-lg self-center mt-5 px-5 rounded">
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

		<footer class="flex w-full justify-center bg-base-200">
			<div class="flex max-w-screen-lg m-5 justify-between flex-1 items-center">
				<span class="text-xl">© IEEE at UCLA</span>
				<div class="text-xl">
					<a
						role="button"
						href="https://www.instagram.com/uclaieee/"
						class="btn btn-circle btn-outline"
					>
						<img
							alt="Instagram logo"
							height="32"
							width="32"
							src="https://unpkg.com/simple-icons@v8/icons/instagram.svg"
						/>
					</a>
					<a role="button" href="https://github.com/UCLA-IEEE/" class="btn btn-circle btn-outline">
						<img
							alt="GitHub logo"
							height="32"
							width="32"
							src="https://unpkg.com/simple-icons@v8/icons/github.svg"
						/>
					</a>
					<a role="button" href="https://discord.gg/RREtsea" class="btn btn-circle btn-outline">
						<img
							alt="Discord logo"
							height="32"
							width="32"
							src="https://unpkg.com/simple-icons@v8/icons/discord.svg"
						/>
					</a>
				</div>
			</div>
		</footer>
	</div>

	<!-- Mobile sidebar -->
	<div class="drawer-side">
		<label for="navbar-drawer" class="drawer-overlay backdrop-blur" />
		<ul class="menu bg-base-200 p-2 w-1/2 gap-2">
			<NavList dropdownIcon={ChevronRight} />
		</ul>
	</div>
</div>
