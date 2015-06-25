var $ = require('jquery')
alert("Hi from app.js")

var button = $('<button/>').html('click me').on('click', function() {
	alert("Hi from browserify!")
})
$('body').append(button)

console.log("Everything is working fine.....")

