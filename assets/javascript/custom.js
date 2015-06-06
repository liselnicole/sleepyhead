$(function(){

	var isMobile = false;
	var mobileSet = false;  

	function checkSize() {	
    	if ($("#main_text img.logo").is(":visible")){
        	isMobile =  false;
    	}
    	else {
    		isMobile =  true;
    	}

	 	if (isMobile) {
	 		if (!(mobileSet)) {
	 			$("#left-side").insertAfter("#right-side");
	 			mobileSet = true;
	 		}
	 	}
	 	else {
	 		if(mobileSet) {
	 			$("#right-side").insertAfter("#left-side");
	 			mobileSet = false;
	 		}
	 	}
	}

	checkSize();

	$(window).resize(checkSize);

	var animatedObjects = {
		pan: {
			elem: $('#pan'),
			time: 500,
			animation: 'fadeInLeft'
		},
		panImage: {
			elem: $('#pan img'),
			time: 1500,
			animation: 'pulse'
		},
		bowl: {
			elem: $('#bowl'),
			time: 2000,
			animation: 'fadeInLeft'
		},
		sunnny: {
			elem: $('#sun'),
			time: 2500,
			animation: 'fadeInUp'
		}
	}

	//Hide all the animated elements onload
	$.each(animatedObjects, function(){
		//console.log(this);
		$(this.elem).hide(); 
	});

	//Loop through the object and pass in the
	//object parms to animate each element
	$.each(animatedObjects, function(){
		//console.log(this.elem);
		(function(theElem, theTime, theAnim){
			
			setTimeout(function(){
				//console.log(theElem + theTime + theAnim);
				theElem.show().addClass('animated ' + theAnim);
			}, theTime); 

		})(this.elem, this.time, this.animation);

	});



});
