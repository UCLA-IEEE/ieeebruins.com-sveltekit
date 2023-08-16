<script>
    import CtaButton from '../CtaButton.svelte';
    import IeeeLogo from '$lib/components/IeeeLogo.svelte';
    import Header from '$lib/components/Header.svelte';
	import SimpleIcon from '$lib/components/SimpleIcon.svelte';

    import { officer_boards } from "./officer_data";
</script>

<div class="mx-4 my-8 flex w-full max-w-screen-lg self-center">
	<Header text="OFFICERS" />
    <p class="mb-2">
    Our officer board does everything from handling corporate contacts, to teaching our year-long projects, to planning memorable events, and more. Click on an officer to learn more about them!
    </p>
</div>

<div class="mx-4 my-8 flex w-full max-w-screen-lg self-center">
    <div class="lg:w-1">
    {#each officer_boards as board, i}
        <Header text = {board.name}/>
        {#each board.officers as officer, j}
            <label for="my_modal_{i}_{j}">
                <!-- Add image -->
                <h3 class="text-lg"> {officer.name} </h3>
                {officer.position}
                {officer.pronouns}
            </label>

            <input type="checkbox" id="my_modal_{i}_{j}" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="text-lg font-bold"> {officer.class} </h3>
                    <p class="py-4"> {@html officer.description} </p>
                    <div class="modal-action">
                        <label for="my_modal_{i}_{j}" class="btn">Close</label>
                    </div>
                </div>
            </div>
        {/each}
    {/each}
    </div>
</div>