let pageTwoAnimating = false
let outroAnimated = false
let typeText 


/*##############PAGE TWO TYPING ANIMATION##############*/
document.addEventListener('DOMContentLoaded',function(event){

	const arrow = document.getElementsByClassName('arrow')
	arrow[0].style.opacity = 1

/*##################TYPING ANIMATION ###################################*/
	typeText = function(){
	  var dataText = [ "Hi, Im Collin.", "Former Chef.", "Television enthusiast.", "Full Stack Web Developer."];
	 
	  function typeWriter(text, i, fnCallback) {

	    if (i < (text.length)) {
	     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
	      setTimeout(function() {
	        typeWriter(text, i + 1, fnCallback)
	      }, 100);
	    }
	    else if (typeof fnCallback == 'function') {
	      setTimeout(fnCallback, 700);
	    }
	  }

	   function StartTextAnimation(i) {
	     if (typeof dataText[i] == 'undefined'){
	     	pageTwoAnimating = false
	     }

	    if (i < dataText[i].length) {
	     typeWriter(dataText[i], 0, function(){
	       StartTextAnimation(i + 1);
	     });
	    }
	  }

	  StartTextAnimation(0);
	}


/*#############PROJECT MODALS#############*/
	const cards = document.querySelectorAll('.card')
		cards.forEach((c, i) => {
			c.addEventListener('click', function handleModal(){
				const modal = document.getElementById('modal')
				const close = document.getElementById('modalClose')
				const textBox = document.getElementById('textBox')
				const image = document.getElementById('modalImg')
				const title = document.getElementById('modalTitle')
				const modalLinks = document.getElementById('modalLinks')
				const modalSpan = document.getElementById('modalSpan')
				const modalP = document.getElementById('modalP')
				modalSpan.style.display = 'block'
				console.log(modalLinks)
				if(i === 0){
					title.innerText = 'Behind The Bar'
					image.src = './assets/BTB.png'
					image.alt = 'Behind The Bar'
					modalSpan.innerText = `- 'Kitchen Confidental meets the 21st century.' `
					modalP.innerText = `Built with the MERN stack, this web application is for users in the Toronto restaurant industry to share the latest gossip, issues, and drama occuring 'Behind the Bar.' `
				} else if(i === 1) {
					title.innerText = 'Connect to Collin'
					image.alt = 'Connect to Collin'
					image.src = './assets/C2C.png'
					modalSpan.innerText = ''
					modalSpan.style.display = 'none'
					modalP.innerText = `Built with the MERN stack, and the Socket.IO library. Bluntly put, 'Connect to Collin' allows you to do just that, connect to Collin. `
				} else if(i === 2) {
					title.innerText = 'Quicky Quiz'
					image.alt = 'Quicky Quiz'
					image.src = './assets/QQ.png'
					modalSpan.innerText = `- 'My first project' `
					modalP.innerText = `Utilizing the OpenTriviaDB API, this React Application is a multiplayer quiz.`
				}
				modal.style.display = 'grid'
				close.addEventListener('click', function(){
					modal.style.display = 'none'
				})
		})
	})
})
/*#################PAGE ANIMATION HANDLERS##################*/
const isInViewport = function(elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

document.addEventListener('scroll', function(){
	const textBox = document.getElementsByClassName('textBox')
	const contactBox = document.getElementById('contactBox')
	if(isInViewport(contactBox)){
		document.getElementById('page4Arrow').style.opacity = 0
		document.getElementById('progressBar').style.opacity = '0'
		const path849 = document.querySelector('.path849')
		const path850 = document.querySelector('.path850')
		const path851 = document.querySelector('.path851')
		const path852 = document.querySelector('.path852')
		path849.style.animation = 'fill849 3s linear forwards'
		path850.style.animation = 'fill850 3s linear forwards'
		path851.style.animation = 'fill851 3s linear forwards'
		path852.style.animation = 'fill852 3s linear forwards'
		setTimeout(() => {
			contactBox.classList.add('scale-in-center')
		}, 2500)
	}else if(isInViewport(textBox[0]) && pageTwoAnimating === false) {
		pageTwoAnimating = true
		typeText()

	} else {
		progressBar.style.opacity = '1'
	}
})

/*#####################PROGRESS BAR #############################*/

function progress(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.documentElement.style.setProperty('--progress', scrolled + '2' + '%')

}

window.onscroll = progress


