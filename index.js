/* global Vue */
// var app = new Vue({
//   el: "#app",
//   data: function () {
//     return {
//       message: "Hello from JavaScript!",
//     };
//   },
// });



var app5 = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'My name is Eric'
  }
})