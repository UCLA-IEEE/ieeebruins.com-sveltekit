<script lang="ts">
	import Page from '../../routes/+page.svelte';

	// TODO: `fetch` must be inside an async function, otherwise SvelteKit will
	// complain:
	//
	// Error: Cannot call `fetch` eagerly during server side rendering with
	// relative URL (/api/lab-hours) — put your `fetch` calls inside `onMount` or
	// a `load` function instead
	async function fetchLabData() {
		return fetch('/api/lab-hours').then((response) => response.json());
	}

	let labDataPromise = fetchLabData();

	let filterClass = 'Pick a Class';

	let cellsToClasses = Array.from({ length: 10 }, () => Array(20).fill([]));

	let highlightedCells = Array.from({ length: 10 }, () => Array(20).fill(false));

	const times = [
		'10:00 AM',
		'11:00 AM',
		'12:00 PM',
		'1:00 PM',
		'2:00 PM',
		'3:00 PM',
		'4:00 PM',
		'5:00 PM'
	];

	interface projectColorsInterface {
		OPS: string;
		MM: string;
		PR: string;
		DAV: string;
		WRAP: string;
	}

	const projectColors: projectColorsInterface = {
		OPS: 'badge-neutral',
		MM: 'badge-primary',
		PR: 'badge-secondary',
		DAV: 'badge-accent',
		WRAP: 'badge-ghost'
	};

	function projectSortFn(a: string, b: string) {
		const projects = ['OPS', 'MM', 'PR', 'DAV', 'WRAP'];

		return projects.indexOf(a) - projects.indexOf(b);
	}

	function getAllClasses(labData: any) {
		const officerClasses = labData.abilities.classes;
		const classesSet = new Set();
		// loop through each officer and get all classes
		Object.keys(officerClasses).forEach((key) => {
			officerClasses[key].forEach((c: string) => {
				classesSet.add(c);
			});
		});

		return Array.from(classesSet).sort();
	}

	function getClasses(officers: string, labData: any) {
		// officers is a string of officers, separated by newlines
		const officersList = officers.split('\n');
		const officerClasses = labData.abilities.classes;
		const classesSet = new Set();

		// if (officersList[0] === 'Check Discord') {
		// 	// console.log(`Discord`);
		// 	return ['Check Discord'];
		// }

		// for each officer, get the classes and put them together
		officersList.forEach((officer) => {
			if (officer in officerClasses) {
				const officer_classes = officerClasses[officer];
				// console.log(`${officer} :${officer_classes}`);
				officer_classes.forEach((c: string) => {
					classesSet.add(c);
				});
			}
		});

		return Array.from(classesSet).sort();
	}

	function getCheckoffs(officers: string, labData: any) {
		const officersList = officers.split('\n');
		const officerCheckoffs = labData.abilities.checkoffs;

		const checkoffsSet = new Set<string>();

		// if (officersList[0] === 'Check Discord') {
		// 	// console.log(`Discord`);
		// 	return ['Check Discord'];
		// }

		// for each officer, get checkoffs and put them together
		officersList.forEach((officer) => {
			if (officer in officerCheckoffs) {
				const officer_checkoffs = officerCheckoffs[officer];
				officer_checkoffs.forEach((c: string) => {
					checkoffsSet.add(c);
				});
			}
		});

		return Array.from(checkoffsSet).sort(projectSortFn);
	}
</script>

{#await labDataPromise}
	<span class="loading loading-spinner loading-lg" />
{:then labData}
	<p>Click any of the cells to view checkoffs/classes or use the filter below</p>
	<!-- <p class="mt-2">What class do you need help with?</p> -->
	<select class="select-primary select mb-2" bind:value={filterClass}>
		<option selected disabled>Pick a Class</option>
		<option value="">--</option>
		{#each getAllClasses(labData) as c}
			<option>{c}</option>
		{/each}
	</select>
	<div class="overflow-x-auto">
		<table class="table w-full">
			<!-- head -->
			<thead>
				<tr>
					<th>PST</th>
					<th>MONDAY</th>
					<th>TUESDAY</th>
					<th>WEDNESDAY</th>
					<th>THURSDAY</th>
					<th>FRIDAY</th>
					<th>SAT/SUN</th>
				</tr>
			</thead>
			<tbody>
				{#each times as time, i}
					<tr class="p-0">
						<th>{time}</th>
						{#each labData.hours[i] as officers, j}
							<td class="p-0">
								<label for="my_modal_{i}_{j}">
									<div
										class="flex h-36 flex-col justify-between p-2 hover:bg-primary hover:bg-opacity-10 {getClasses(
											officers,
											labData
										).includes(filterClass) && 'bg-secondary bg-opacity-50'}"
									>
										<div>
											{#each officers.split('\n') as officer}
												<span>{officer}</span>
												<br />
											{/each}
										</div>
										<!-- {@html officers.split('\n').join(' <div class="badge badge-secondary">OPS</div><br>')} -->
										<div>
											{#each getCheckoffs(officers, labData) as checkoff}
												<div class="badge-xs opacity-75 {projectColors[checkoff]}">
													{checkoff}
												</div>
											{/each}
										</div>
									</div>
								</label>

								<!-- Put this part before </body> tag -->
								<input type="checkbox" id="my_modal_{i}_{j}" class="modal-toggle" />
								<div class="modal">
									<div class="modal-box max-h-96 w-96 select-none">
										<label
											for="my_modal_{i}_{j}"
											class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">✕</label
										>
										<table class="w-full">
											<tr>
												<td class="text-lg font-bold">Classes</td>
												<td class="text-lg font-bold">Checkoffs</td>
											</tr>
											<tr>
												<td class="w-1/2 align-top">
													{#each getClasses(officers, labData) as c}
														<!-- render each officer's classes -->
														<p>{c}</p>
													{/each}
												</td>
												<td class="w-1/2 align-top">
													{#each getCheckoffs(officers, labData) as c}
														<!-- render each officer's project checkoffs -->
														<p>{c}</p>
													{/each}
												</td>
											</tr>
										</table>
									</div>
								</div>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:catch error}
	<div class="alert">
		Something went wrong: {error}
	</div>
{/await}
