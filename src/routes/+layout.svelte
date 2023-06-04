<script lang="ts">
	import '../app.css';

	import IeeeLogo from '../lib/components/IeeeLogo.svelte';
	import FooterButton from './FooterButton.svelte';

	import NavList from './NavList.svelte';
	import { Menu, ChevronDown, ChevronRight } from 'lucide-svelte';
</script>

<!-- Navbar for desktop, sidebar for mobile -->
<div class="drawer">
	<input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Desktop navbar -->
		<div class="navbar absolute z-50 mt-5 max-w-screen-lg self-center rounded px-5">
			<!-- IEEE at UCLA icon -->
			<div class="navbar-start">
				<a
					role="button"
					href="/"
					class="drop-shadow-base-100 btn-primary btn-md btn gap-2 text-2xl normal-case text-base-100 drop-shadow-lg"
				>
					<IeeeLogo color={'#ffffff'} className={'w-8 h-8'} />
					<span> IEEE at UCLA </span>
				</a>
			</div>

			<!-- Desktop navigation list -->
			<div class="dropdown-end dropdown hidden justify-end lg:flex">
				<ul class="menu menu-horizontal gap-2 p-2">
					<NavList dropdownIcon={ChevronDown} />
				</ul>
			</div>

			<!-- Menu button to toggle sidebar, only shown on mobile -->
			<div class="navbar-end lg:hidden">
				<label for="navbar-drawer" class="btn-primary btn-circle btn">
					<Menu color={'#ffffff'} />
				</label>
			</div>
		</div>

		<!-- Page content -->
		<slot />

		<footer class="flex w-full justify-center bg-base-200">
			<div class="m-5 flex max-w-screen-lg flex-1 items-center justify-between">
				<span class="text-xl">© IEEE at UCLA</span>
				<div class="text-xl">
					<FooterButton
						href="https://www.instagram.com/uclaieee/"
						alt="Instagram logo"
						iconSlug="instagram"
					/>
					<FooterButton href="https://github.com/UCLA-IEEE/" alt="GitHub logo" iconSlug="github" />
					<FooterButton href="https://discord.gg/RREtsea" alt="Discord logo" iconSlug="discord" />
				</div>
			</div>
		</footer>
	</div>

	<!-- Mobile sidebar -->
	<div class="drawer-side">
		<label for="navbar-drawer" class="drawer-overlay backdrop-blur" />
		<ul class="menu w-1/2 gap-2 bg-base-200 p-2">
			<NavList dropdownIcon={ChevronRight} />
		</ul>
	</div>
</div>
