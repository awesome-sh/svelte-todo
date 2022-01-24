<script>
	import { writable } from 'svelte/store';

	import Top from './components/Top.svelte';
	import Main from './components/Main.svelte'
	import Write from './components/Write.svelte'

	export let clientWidth = `${window.innerWidth}px`;
	export let clientHeight = `${window.innerHeight}px`;

	const isWrite = writable(false)
	const todos = writable([])

	isWrite.subscribe(v => console.log('Change isWrite', v))
	todos.subscribe(v => console.log('Todo List', v))

	window.addEventListener('resize', () => {
		clientWidth = `${window.innerWidth}px`;
		clientHeight = `${window.innerHeight}px`;
	})
	
</script>

<main style="--clientWidth:{clientWidth}; --clientHeight:{clientHeight};">
	<div class="wrap">
		<Top isWrite={isWrite}/>
		<Main todos={todos} />
		<Write isWrite={isWrite} todos={todos}/>
	</div>

</main>

<style>
	main {
		margin: 0;
		padding: 0;
		width: var(--clientWidth);
		height: var(--clientHeight);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.wrap {
		position: relative;
		max-width: 414px;
        min-width: 414px;
		height: 100%;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
	}
</style>