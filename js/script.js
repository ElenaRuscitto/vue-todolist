const {createApp} = Vue;

createApp ({
  data() {
    return {
      todoList: [
      
        {
          todo: 'Rilassarmi',
          isDone: false
        },

        {
          todo: 'Vedere un film',
          isDone: false
        },

        {
          todo: 'Leggere un libro',
          isDone: false
        },

        {
          todo: 'Andare a fare la spesa',
          isDone: true
        },
        
        {
          todo: 'Mettere su la lavatrice',
          isDone: true
        },
      ],

      // creo una nuov a task di oggetti
      newTask: {
        todo: '',
        isDone: false
      },

    

    }
  },

  methods: {

    // stampo i todo nell'htmls
    addTask (){
      this.todoList.unshift(this.newTask)
      this.newTask = ''
    },

    deleteTask(indice) {
      this.todoList.splice(indice, 1)
    }
  
  }

}).mount ('#app')