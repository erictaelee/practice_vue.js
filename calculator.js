var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "The greatest Calculator",
      number1: 0,
      number2: 0,
      number3: 0,
      total: ""
    };
  },
  methods: {
    sum: function () {
      console.log(parseInt(this.number1))
      console.log(parseInt(this.number2))
      console.log(parseInt(this.number3))
      // console.log(this.number2)
      // console.log(this.number3)
      console.log(parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3));
      total = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    }

  }
});