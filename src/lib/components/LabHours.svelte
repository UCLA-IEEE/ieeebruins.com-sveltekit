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

	function getClasses(officers: string, labData: any) {
		// officers is a string of officers, separated by newlines
		const officersList = officers.split("\n");
		const officerClasses = labData.abilities.classes;

		const classesSet = new Set();

		if (officersList[0] === "Check Discord") {
			// console.log(`Discord`);
			return "Check Discord";
		}

		// for each officer, get the classes and put them together
		officersList.forEach((officer) => {
			
			
			
			if (officer in officerClasses) {
				const officer_classes = officerClasses[officer];
				// console.log(`${officer} :${officer_classes}`);
				officer_classes.forEach((c: string) => {
					classesSet.add(c);
				})
			}

		})

		return Array.from(classesSet).join('<br>');

	}

	function getCheckoffs(officers: string, labData: any) {
		const officersList = officers.split("/n");
		const officerCheckoffs = labData.abilities.checkoffs;

		const checkoffsSet = new Set();

		if (officersList[0] === "Check Discord") {
			// console.log(`Discord`);
			return "Check Discord";
		}

		// for each officer, get the classes and put them together
		officersList.forEach((officer) => {
			if (officer in officerCheckoffs) {
				const officer_checkoffs = officerCheckoffs[officer];
				console.log(`${officer} :${officer_checkoffs}`);
				officer_checkoffs.forEach((c: string) => {
					checkoffsSet.add(c);
				})
			}

		})

		return Array.from(checkoffsSet).join('<br>');
	}



</script>

{#await labDataPromise}
	<span class="loading loading-spinner loading-sm"></span>
{:then labData}
	<div class="overflow-x-auto">
		<table class="table">
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
					<tr>
						<th>{time}</th>
						{#each labData.hours[i] as officers, j}

							<td>
								<label for="my_modal_{i}_{j}" class="w-full h-full">
									<div class="hover:bg-sky-400">
										{@html officers.split("\n").join("<br>")}
									</div>
								</label>
								<!-- Put this part before </body> tag -->
								<input type="checkbox" id="my_modal_{i}_{j}" class="modal-toggle" />
								<div class="modal">
									<div class="modal-box select-none w-96">
										<label for="my_modal_{i}_{j}" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
										<h3 class="font-bold text-lg">Classes</h3>
										{@html getClasses(officers, labData)}
										<br>
										<h3 class="font-bold text-lg">Checkoffs</h3>	
										// get checkoffs here
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

