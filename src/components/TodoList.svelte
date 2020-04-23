<script>
  import { todos } from '../stores';
  import {fade, fly} from 'svelte/transition';
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  const toggle = (todo) => {
    dispatch("toggle", {...todo, done: !todo.done});
  };

  const remove = (id) => {
    dispatch("remove", {id});
  };

</script>
<div class="todo-list">
    <ul>
        {#each $todos as todo, i (todo.id) } 
          <li>
            <label>
              <input checked={todo.done}
                  on:change={ () => toggle(todo) }
                  type="checkbox">
                  { todo.name }
            </label>
            <span on:click={() => remove(todo.id)}>🗑</span>
          </li>
        {/each}
    </ul>
</div>

<style>
  .todo-list {
    min-width: 40%;
    margin: 2rem;
  }

  .todo-list li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    list-style: none;
    border-bottom: 1px solid #999;
    margin-top: 0.5rem;
  }

  li:hover {
    font-weight: 700;
  }

  label {
    cursor: pointer;
  }

  input {
    height: 1.2rem;
    width: 1.2rem;
    line-height: 1.2rem;
  }

  span:hover {
    cursor: pointer;
  }
</style>