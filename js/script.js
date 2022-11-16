"use strict"

const { createApp } = Vue

createApp({
  data() {
    return {
      newText:'',
      todos:[
        {
          text:"Fare la spesa",
          done: true,
        },
        {
          text:"Fare i compiti",
          done: false,
        },
        {
          text:"andare dalla nonna",
          done: false,
        }
      ],
    }
  },
  methods: {
    removeTodo(i) {
      this.todos.splice(i, 1);
    },
    addTodo() {
      const objNewTodo = {
        text: this.newText,
        done: false
      };
      this.todos.push(objNewTodo);
    }
  }
}).mount('#app')
