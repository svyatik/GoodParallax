/**
 * @version 2.0
 * @author Svyatoslav Kovtun <barsic.plus@gmail.com>
 * @license The MIT License
 * @date 05.27.2017
 * @copyright © Svyatoslav Kovtun 2017
 */

var GoodParallax = function() {
    /**
     * This function add event listener to window and smooth parallax effect
     * 
     * @param {Object} parameters for parallax effect
     * @config {number} [speed] The speed of parallax scrolling
     */

    var work = function(parallax, speed) {
        // Add scroll event listener
        window.addEventListener("scroll", function() {
            //In the loop count and apply new position to everyone element
            for (var i = 0; parallax.length > i; i++) {
                // Count the new background position
                var bgScroll = -((window.scrollY -parallax[i].offsetTop) / speed);
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
     * @param {Object}
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
                parallax[i].style.backgroundSize = 'cover';
            }

            // Add other styles for background
            parallax[i].style.backgroundPosition = 'center 0';
            parallax[i].style.backgroundAttachment = 'fixed';
        };

        // When init completed, start the work function
        work(parallax, param.speed);
    };
};
