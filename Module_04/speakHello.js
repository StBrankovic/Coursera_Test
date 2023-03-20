(function (window) {
  	var word = "Hello";
  	var helloSpeaker = {
    	speak: function (name) {
      	console.log(word + " " + name + "!");
    	}
  	};
  	window.helloSpeaker = helloSpeaker;
})(window);