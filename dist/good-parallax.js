/**
 * @version 2.1.2
 * @author Svyatoslav Kovtun <svyat.kovtun@gmail.com>
 * @contributor Marius Hansen <marius.o.hansen@gmail.com>
 * @license The MIT License
 * @date 05.27.2017
 * @copyright © Svyatoslav Kovtun 2017
 */

// Check if mobile
var mobile = false;
if (/Mobi/.test(navigator.userAgent)) { mobile = true; }

var GoodParallax = function() {
    /**
     * This function add event listener to window and smooth parallax effect
     *
     * @param   {Object}  parallax  The list of parallax elements
     * @config  {number}  speed     The speed of parallax scrolling
     */

    var work = function(parallax, speed) {
        // Add scroll event listener
        window.addEventListener("scroll", function() {
            //In the loop count and apply new position to everyone element
            for (var i = 0; parallax.length > i; i++) {
                // Count the new background position
                var bgScroll = -((window.scrollY -parallax[i].offsetTop) / speed);
								// Reposition start point hight to keep in container on mobile
								if (mobile === true){ bgScroll = bgScroll - 150; }
                // Save new background position to variable
                var bgPosition = 'center '+ bgScroll + 'px';
                // Set new background position to element
                parallax[i].style.backgroundPosition = bgPosition;
            }
        });
    };

    /**
     * Initialize all elements with 'parallax' class
     *
     * @param  {Object}
     */
    this.init = function(param) {
        if(typeof param === 'undefined') {
            param = {}
        }

        param = {
            speed: typeof param.speed !== 'undefined' ? param.speed : 5,
            className: typeof param.className !== 'undefined' ? param.className : 'parallax'
        }

        var parallax = document.getElementsByClassName(param.className);

        for (var i = 0; parallax.length > i; i++) {
            var img_data = parallax[i].dataset.img;
            if(typeof img_data !== 'undefined') {
                parallax[i].style.backgroundImage = 'url('+img_data+')';
            }

            // Add other styles for background
            parallax[i].style.backgroundPosition = 'center 0';

						if (mobile === true) {
							// Set image 1.5x bigger to keep the image inside container
							parallax[i].style.backgroundSize = 'auto ' + parallax[i].scrollHeight * 1.5 + 'px';
							// 'Cover' will not work on mobile
							parallax[i].style.backgroundAttachment = 'scroll';
						}else{
							parallax[i].style.backgroundAttachment = 'fixed';
							parallax[i].style.backgroundSize = 'cover';
						}

        };

        // When init completed, start the work function
        work(parallax, param.speed);
    };
};
