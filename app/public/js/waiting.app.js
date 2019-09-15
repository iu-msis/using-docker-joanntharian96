var waitingApp = new Vue({
  el: '#personWaitingApp',
  data: {
    person:{}
},

  methods:{
    fetchPerson() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(randPerson=>{waitingApp.person= randPerson.results[0]});
    }
  },

  created() {
    this.fetchPerson();
  }

});
