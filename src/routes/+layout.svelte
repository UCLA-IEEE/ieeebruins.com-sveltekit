<script lang="ts">
	import '../app.css';

	import IeeeLogo from '../lib/components/IeeeLogo.svelte';
	import FooterButton from './FooterButton.svelte';

	import NavList from './NavList.svelte';
	import { Menu, ChevronDown, ChevronRight } from 'lucide-svelte';
</script>

<div class="navbar h-6 bg-primary text-white">
	<div class="navbar-start">
		<a href="/" class="btn-ghost btn text-xl"
			><IeeeLogo color={'#ffffff'} className={'w-5 h-5'} />IEEE at UCLA</a
		>
	</div>
	<div class="navbar-end">
		<div class="dropdown-end dropdown">
			<div tabindex="0" role="button" class="btn-ghost btn bg-primary lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				tabindex="0"
				class="dropdown-content menu menu-sm z-[1] mt-3 w-52 rounded-box bg-primary p-2 shadow"
			>
				<li><a>Item 1</a></li>
				<li>
					<a>Parent</a>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</li>
				<li><a>Item 3</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a>Item 1</a></li>
			<li>
				<details>
					<summary>Parent</summary>
					<ul class="mt-4 bg-primary p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</details>
			</li>
			<li><a>Item 3</a></li>
		</ul>
	</div>
</div>

<!-- Navbar for desktop, sidebar for mobile -->
<slot />
