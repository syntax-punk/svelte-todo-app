<script>
	import {onMount} from 'svelte';
	import TodoForm from './components/TodoForm.svelte';
	import TodoList from './components/TodoList.svelte';
	import {todos} from './stores';
	import {createTodo, getTodos, updateTodo, removeTodo} from './utils/api.js'
	
	onMount(() => {
		getTodos().then(data => {
			todos.set(data);
		});
	})

	const handleOnCreate = (event) => {
		const todo = event.detail;
		createTodo(todo).then(data => {
			todos.update(todos => [...todos, data]);
		})
	} 

	const handleOnToggle = (event) => {
		const todo = event.detail;
		updateTodo(todo)
			.then(data => todos
				.update(todos => todos.map(item => item.id !== data.id ? item : data))
			);
	}

	const handleOnRemove = (event) => {
		const {id} = event.detail;
		removeTodo(id).then(data => todos.update(todos => todos.filter(item => item.id !== id)));
	}

	$: completed = $todos.filter(t => t.done).length;
</script>

<div class="todo-app">
	<h1>TODO LIST:</h1>
	<TodoForm on:create={handleOnCreate} />
	<TodoList on:toggle={handleOnToggle} on:remove={handleOnRemove}/>
	<h3>Completed: {completed}</h3>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300&display=swap');

	:global(*) {
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;
		padding: 0;
		margin: 0;
	}

	:global(.contacts, .contact-card) {
		min-width: 40%;
	}

	.todo-app {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	h3 {
		margin: 2rem;
	}
</style>