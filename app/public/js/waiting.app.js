var waitingApp = new Vue({
  el: '#personWaitingApp',
  data: {
    person:{
      "gender": "",
      "name": {
       "title": "",
       "first": "",
       "last": ""
     },
     "location": {
        "street": "",
        "city": "",
        "state": "",
        "postcode": "",
        "coordinates": {
          "latitude": "",
          "longitude": ""
        },
        "timezone": {
          "offset": "",
          "description": ""
        }
      },
      "email": "",
      "login": {
        "uuid": "",
        "username": "",
        "password": "",
        "salt": "",
        "md5": "",
        "sha1": "",
        "sha256": ""
      },
      "dob": {
        "date": "",
        "age": ""
      },
      "registered": {
        "date": "",
        "age": ""
      },
      "phone": "",
      "cell": "",
      "id": {
        "name": "",
        "value": ""
      },
      "picture": {
        "large": "",
        "medium": "",
        "thumbnail": ""
      },
      "nat": ""
    }
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
