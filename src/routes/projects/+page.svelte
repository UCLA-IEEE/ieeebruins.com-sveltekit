<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { ExternalLink } from 'lucide-svelte';
	import ProjectDescription from '$lib/components/ProjectDescription.svelte';

	import ops from '$lib/images/ops.jpg';
	import ops1 from '$lib/images/ops1.jpg';
	import mm1 from '$lib/images/mm1.png';
	import mm2 from '$lib/images/mm2.gif';
	import pr1 from '$lib/images/pr1.png';
	import pr2 from '$lib/images/pr2.png';
	import dav1 from '$lib/images/dav1.png';
	import dav2 from '$lib/images/dav2.gif';
	import wrap1 from '$lib/images/wrap1.png';
	import wrap2 from '$lib/images/wrap2.png';

	const project_data = [
		{
			project_name: 'Open Project Space (OPS)',
			slogan: 'No Fear in not Knowing',
			description:
				' Our OPS program is designed to provide hands-on foundational knowledge in the field of tech and hardware. We assume you know absolutely nothing, and build your knowledge from the ground up. Throughout the year, students will be challenged to complete 2-3 small projects per quarter that will allow you to apply the skills you have learned.',
			website: 'https://openproject.space/',
			project_id: 'ops',
			images: [ops, ops1]
		},
		{
			project_name: 'Micromouse (MM)',
			slogan: 'Head-to-Head Competition',
			description:
				'The micromouse project guides students through building their own autonomous, maze solving robot or “mouse”. Within this program, our leads teach you the fundamentals of a micromouse, explaining every step along the way, eventually reaching a point where you’ll design and print your own PCB, solder it all together, and program it to solve an unknown maze by itself. At the end of the year, students are invited to compete against each other to solve a maze as fast as possible.',
			website: 'https://projects.ieeebruins.com/micromouse/',
			project_id: 'mm',
			images: [mm1, mm2]
		},
		{
			project_name: 'Pocket Racers (PR)',
			slogan: 'No License Required',
			description:
				'The Pocket Racers project is a hands-on introduction to how computers see and react to the world around them. No prior experience is required; students will get a crash course in Raspberry Pis, motor control, computer vision, and elementary machine learning techniques by building a fully autonomous self-driving car using just a Raspberry Pi, some motors, and a camera.',
			website: 'https://projects.ieeebruins.com/pocket-racers/',
			project_id: 'pr',
			images: [pr1, pr2]
		},
		{
			project_name: 'Digital Audio Visualizer (DAV)',
			slogan: 'Learn to Think Logically',
			description:
				'DAV bridges the gap between hardware and software. We’ll be teaching you about digital logic concepts, digital signal processing techniques, and the FPGA design process. By the end of the year, we’ll create a device that can calculate and visualize the frequencies of audio signals using an FPGA. If you’re wondering what digital logic is all about, DAV is the project for you.',
			website: 'https://projects.ieeebruins.com/DAV/',
			project_id: 'dav',
			images: [dav1, dav2]
		},
		{
			project_name: 'Wireless, RF, and Analog Project (WRAP)',
			slogan: 'Learn How the World Communicates',
			description:
				'WRAP is an advanced project focused on wireless digital communications and RF circuits. WRAP teaches students a variety of circuits topics used in wireless transceiver design, including amplifiers, mixers, and oscillators. On the signal processing side, WRAP covers the fundamentals of digital communication, digital filtering, and other techniques used in real-world communication systems. As the year progresses, students use this knowledge to design, build, and test their own physical wireless transceivers.',
			website: 'https://projects.ieeebruins.com/wrap/',
			project_id: 'wrap',
			images: [wrap1, wrap2]
		},
		{
			project_name: 'Student Project Initiative (SPI)',
			slogan: 'Your Vision, Our Mission',
			description:
				'SPI is a program dedicated to providing motivated students with the physical and intellectual resources they need to develop their ideal project. In this program, students are allowed to come up with their own project ideas, propose it the board, and possibly receive funding and guidance for the completion of the project. Contact our project leads for more information!',
			website: '',
			project_id: 'spi',
			images: []
		}
	];
</script>

<div class="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg">
	<Header text="Our Projects" />
	<p class="mb-2">
		Our primary method in achieving our mission is by getting our members involved in our project
		curriculums. For all projects, we have info sessions at the beginning of every academic year and
		release applications around the same time. If you are interested in learning more about our
		projects, visit <a href="projects.ieeebruins.com" class="text-primary"
			>projects.ieeebruins.com</a
		> to get the public resources that we have for each! Feel free to use these resources as inspiration
		for your own projects!
	</p>
</div>

{#each project_data as project}
	<ProjectDescription data={project} />
{/each}
