(function (window) {
  	var word = "Good Bye";
  	var byeSpeaker = {
    	speak: function (name) {
      	console.log(word + " " + name + "!");
    	}
  	};
  	window.byeSpeaker = byeSpeaker;
})(window);