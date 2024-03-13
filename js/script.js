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
          todo: 'Caricare la lavatrice',
          isDone: true
        },
      ],

      // creo una nuov a task di oggetti
      newTask: {
        todo: '',
        isDone: false
      },

      messageError: '',
      todoString: ''
    }
  },

  methods: {

    // stampo i todo nell'htmls
    addTask() {
      // condizione per il messaggio errore sotto i 4 caratteri
      if(this.todoString.length < 4) {

        this.messageError = 'Attenzione, il testo inserito deve essere superiore a 4 caratteri';
        

      } else {

        this.newTask = {
          todo : this.todoString,
          isDone: false
          
        };
        // reset errormessage
        this.todoList.unshift(this.newTask);
        this.messageError = '';
        
      }
      // reset stringa
      this.todoString = ''
    },

    deleteTask(indice) {
      this.todoList.splice(indice, 1)
    }
  
  }

}).mount ('#app')