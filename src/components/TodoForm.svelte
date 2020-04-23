<script>
  import {createEventDispatcher} from 'svelte';
  
  const dispatch = createEventDispatcher();
  let value = ""; 

  const onSubmit = (name) => {
    dispatch('create', {
      name,
      done: false
    })
  }
</script>

<form on:submit|preventDefault={() => onSubmit(value)}>
  <input type="text" bind:value/>
  <button type="submit">Add</button>
</form>

<style>
  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    font-size: 1.6rem;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
  }

  button {
    float: right;
    background-color: #133973;
    color: white;
    font-size: 1rem;
    height: 32px;
    margin-bottom: 8px; 
    padding: 0 8px;
    border-radius: 4px;
    cursor: pointer;
  }
</style>