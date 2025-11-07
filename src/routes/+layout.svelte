<script lang="ts">
	import '../app.css';

	import IeeeLogo from '../lib/components/IeeeLogo.svelte';
	import FooterButton from './FooterButton.svelte';
	import linkedin from '$lib/images/linkedin.svg';

	import NavList from './NavList.svelte';
	import { Menu, ChevronDown, ChevronRight } from 'lucide-svelte';
</script>

<!-- <div class="h-11 bg-red-400" /> -->

<div class="">
	<div class="navbar h-6 w-full bg-primary text-white">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl"
				><IeeeLogo color={'#ffffff'} className={'w-5 h-5'} />IEEE at UCLA</a
			>
		</div>
		<div class="navbar-end">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost bg-primary lg:hidden">
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
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-primary p-2 font-semibold uppercase tracking-wider shadow"
				>
					<li>
						<a href="/projects">Projects</a>
					</li>
					<li><a href="/workshops">Workshops</a></li>

					<li><a href="/outreach">Outreach</a></li>
					<li><a href="/lab">Lab</a></li>
					<li><a href="/officers">Officers</a></li>
					<li><a href="/sponsors">Sponsors</a></li>
					<li><a href="/ie">IE</a></li>
				</ul>
			</div>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1 font-semibold uppercase">
				<li><a href="/projects">Projects</a></li>
				<li><a href="/workshops">Workshops</a></li>
				<li><a href="/outreach">Outreach</a></li>
				<li><a href="/lab">Lab</a></li>
				<li><a href="/officers">Officers</a></li>
				<li><a href="/sponsors">Sponsors</a></li>
				<li><a href="/ie">IE</a></li>
			</ul>
		</div>
	</div>

	<!-- Navbar for desktop, sidebar for mobile -->
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

				<!-- simple-icons doesn't support LinkedIn logo, so we use a custom image -->
				<a
					role="button"
					href="https://www.linkedin.com/company/ieee-student-branch-ucla"
					class="group btn btn-circle shadow-sm hover:invert dark:shadow-gray-500"
				>
					<img alt="LinkedIn logo" height="32" width="32" src={linkedin} />
				</a>
			</div>
		</div>
	</footer>
</div>
