/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor()
  {
    this.arr = [];
  }
  add(todo){
    this.arr.push(todo);
  }
  remove(indexOfTodo){
    
    if(indexOfTodo >= this.arr.length)
    return this.arr;

    const newArr = [];
    for(let i = 0 ; i < this.arr.length; i++)
    {
      if(i == indexOfTodo || this.arr[i] == -1)
      this.arr[i] == -1;
      else
      newArr.push(this.arr[i]);
    }
    this.arr = newArr;
    return newArr;
  }
  update(index,updatedTodo)
  {
    if(index >= this.arr.length || this.arr[index] == -1)
    return null;

    this.arr[index] = updatedTodo;
  }
  getAll()
  {
    this.newTodo = [];

    for(let i = 0 ;i < this.arr.length;i++)
    {
      if(this.arr[i] == -1)
      continue;
      
      this.newTodo.push(this.arr[i]);
    }
    return this.newTodo;
  }

  get(indexOfTodo)
  {
    if(indexOfTodo >= this.arr.length || this.arr[indexOfTodo] == -1)
    return null;

    return this.arr[indexOfTodo];
  }

  clear()
  {
    this.arr.length = [];
  }
}

module.exports = Todo;
