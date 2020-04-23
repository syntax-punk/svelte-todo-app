const PATH = 'http://localhost:8686/todos/';

export const getTodos = () => {
  return fetch(PATH).then(resp => resp.json())
}

export const createTodo = (newTodo) => {
  return fetch(PATH, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
  }).then(resp => resp.json())
}

export const updateTodo = (todo) => {
  return fetch(`${PATH}${todo.id}`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
  }).then(resp => resp.json())
}

export const removeTodo = (id) => {
  return fetch(`${PATH}${id}`, {
      method: 'DELETE',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  }).then(resp => resp.json())
}