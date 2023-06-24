<script lang="ts">
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

	const projectColors = {
		OPS: 'badge-neutral',
		MM: 'badge-primary',
		PR: 'badge-secondary',
		DAV: 'badge-accent',
		WRAP: 'badge-ghost'
	};

	function getClasses(officers: string, labData: any) {
		// officers is a string of officers, separated by newlines
		const officersList = officers.split('\n');
		const officerClasses = labData.abilities.classes;

		const classesSet = new Set();

		if (officersList[0] === 'Check Discord') {
			// console.log(`Discord`);
			return ['Check Discord'];
		}

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

		return Array.from(classesSet);
	}

	function getCheckoffs(officers: string, labData: any) {
		const officersList = officers.split('\n');
		const officerCheckoffs = labData.abilities.checkoffs;

		const checkoffsSet = new Set();

		if (officersList[0] === 'Check Discord') {
			// console.log(`Discord`);
			return ['Check Discord'];
		}

		// for each officer, get checkoffs and put them together
		officersList.forEach((officer) => {
			if (officer in officerCheckoffs) {
				const officer_checkoffs = officerCheckoffs[officer];
				officer_checkoffs.forEach((c: string) => {
					checkoffsSet.add(c);
				});
			}
		});

		return Array.from(checkoffsSet);
	}
</script>

{#await labDataPromise}
	<span class="loading-spinner loading-sm loading" />
{:then labData}
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
									<div class="h-36 p-2 hover:bg-slate-50">
										{#each officers.split('\n') as officer}
											<span>{officer}</span>
											{#if officer in labData.abilities.checkoffs}
												<!-- code to show officer badges -->
												<!-- {#each labData.abilities.checkoffs[officer] as project}
													<div class="badge {projectColors[project]}">{project}</div>
												{/each} -->
											{/if}
											<br />
										{/each}
										<!-- {@html officers.split('\n').join(' <div class="badge badge-secondary">OPS</div><br>')} -->
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
