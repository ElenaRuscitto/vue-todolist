const {createApp} = Vue,

createApp ({
  data() {
    return {
      todoList: [
      
        {
          task: 'Rilassarmi',
          Bool: false
        },

        {
          task: 'Vedere un Film'
        },

        {
          task: 'Leggere un Libro'
        },

      ]

    }
  },

  methods: {
console.log(todoList);
  }

}).mount ('#app')