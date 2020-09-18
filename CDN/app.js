new Vue({
  el: "#vue-app",
  data: {
    message: "<i>Hello Indonesia</i>",
    letter: "<i><b>Hai, Cassandra!</i></b>",
    m2: "Hai, kamu!",
    name: "Alexandra",
    show: false,
    one: 1,
    two: 2,
    result: null,
  },
  methods: {
    sum: function (newNumber) {
      return (this.result = this.one + this.two + newNumber);
    },
  },
});
