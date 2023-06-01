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
</script>

{#await labDataPromise}
	<div class="loading">Still waiting my bois</div>
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
						{#each labData.hours[i] as officers}
							<th>
								{officers}
							</th>
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
