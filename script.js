document.addEventListener('DOMContentLoaded',function(event){
	let pageTwoAnimating = false
	let outroAnimated = false
	function typeText(){
		  // array with texts to type in typewriter
	  var dataText = [ "Hi, Im Collin.", "Former Chef.", "Television enthusiast.", "Full Stack Web Developer"];
	  
	  // type one text in the typwriter
	  // keeps calling itself until the text is finished
	  function typeWriter(text, i, fnCallback) {
	    // chekc if text isn't finished yet
	    if (i < (text.length)) {
	      // add next character to h1
	     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

	      // wait for a while and call this function again for next character
	      setTimeout(function() {
	        typeWriter(text, i + 1, fnCallback)
	      }, 100);
	    }
	    // text finished, call callback if there is a callback function
	    else if (typeof fnCallback == 'function') {
	      // call callback after timeout
	      setTimeout(fnCallback, 700);
	    }
	  }
	  // start a typewriter animation for a text in the dataText array
	   function StartTextAnimation(i) {
	     if (typeof dataText[i] == 'undefined'){
	     	pageTwoAnimating = false
	     }
	     // check if dataText[i] exists
	    if (i < dataText[i].length) {
	      // text exists! start typewriter animation
	     typeWriter(dataText[i], 0, function(){
	       // after callback (and whole text has been animated), start next text
	       StartTextAnimation(i + 1);
	     });
	    }
	  }
	  // start the text animation
	  StartTextAnimation(0);
	}
	const isInViewport = function(elem) {
	    const bounding = elem.getBoundingClientRect();
	    return (
	        bounding.top >= 0 &&
	        bounding.left >= 0 &&
	        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
	};
	const nameLogo = document.getElementById('nameLogo')
	const pageToken = document.getElementById('page2Token')
	const textBox = document.getElementsByClassName('textBox')
	const commentBox = document.getElementById('commentBox')
	const progressBar = document.getElementById('progressBar')
	const card = document.getElementsByClassName('card')

	document.addEventListener('scroll', function(){
		if(isInViewport(commentBox)){
			progressBar.style.opacity = '0'
			const path849 = document.querySelector('.path849')
			const path850 = document.querySelector('.path850')
			const path851 = document.querySelector('.path851')
			const path852 = document.querySelector('.path852')
			path849.style.animation = 'fill849 3s linear forwards'
			path850.style.animation = 'fill850 3s linear forwards'
			path851.style.animation = 'fill851 3s linear forwards'
			path852.style.animation = 'fill852 3s linear forwards'
			setTimeout(() => {
				commentBox.classList.add('scale-in-center')
			}, 2500)
		}else if(isInViewport(textBox[0]) && pageTwoAnimating === false) {
			pageTwoAnimating = true
			typeText()

		} else {
			progressBar.style.opacity = '1'
		}
	})
})

/*#####################PROGRESS BAR #############################*/

function progress(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.documentElement.style.setProperty('--progress', scrolled + '2' + '%')

}

window.onscroll = progress
