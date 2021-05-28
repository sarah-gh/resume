/* =============================================================

  Smooth Scroll v4.4
  Animate scrolling to anchor links, by Chris Ferdinandi.
  http://gomakethings.com

  Additional contributors:
  https://github.com/cferdinandi/smooth-scroll#contributors

  Free to use under the MIT License.
  http://gomakethings.com/mit/

  p.s. This is a custom build for Fixed Nav, ask @adtileHQ for
  any changes made into this build

 * ============================================================= */

window.smoothScroll = (function(window, document, undefined) {

    'use strict';

    // Default settings
    // Private {object} variable 
    var _defaults = {
        speed: 500,
        easing: 'easeInOutCubic',
        updateURL: false,
        callbackBefore: function() {},
        callbackAfter: function() {}
    };

    // Merge default settings with user options
    // Private method
    // Returns an {object}
    var _mergeObjects = function(original, updates) {
        for (var key in updates) {
            original[key] = updates[key];
        }
        return original;
    };

    // Calculate the easing pattern
    // Private method
    // Returns a decimal number
    var _easingPattern = function(type, time) {
        if (type == 'easeInQuad') return time * time; // accelerating from zero velocity
        if (type == 'easeOutQuad') return time * (2 - time); // decelerating to zero velocity
        if (type == 'easeInOutQuad') return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
        if (type == 'easeInCubic') return time * time * time; // accelerating from zero velocity
        if (type == 'easeOutCubic') return (--time) * time * time + 1; // decelerating to zero velocity
        if (type == 'easeInOutCubic') return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
        if (type == 'easeInQuart') return time * time * time * time; // accelerating from zero velocity
        if (type == 'easeOutQuart') return 1 - (--time) * time * time * time; // decelerating to zero velocity
        if (type == 'easeInOutQuart') return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
        if (type == 'easeInQuint') return time * time * time * time * time; // accelerating from zero velocity
        if (type == 'easeOutQuint') return 1 + (--time) * time * time * time * time; // decelerating to zero velocity
        if (type == 'easeInOutQuint') return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
        return time; // no easing, no acceleration
    };

    // Calculate how far to scroll
    // Private method
    // Returns an integer
    var _getEndLocation = function(anchor, headerHeight) {
        var location = 0;
        if (anchor.offsetParent) {
            do {
                location += anchor.offsetTop;
                anchor = anchor.offsetParent;
            } while (anchor);
        }
        location = location - headerHeight;
        if (location >= 0) {
            return location;
        } else {
            return 0;
        }
    };

    // Convert data-options attribute into an object of key/value pairs
    // Private method
    // Returns an {object}
    var _getDataOptions = function(options) {

        if (options === null || options === undefined) {
            return {};
        } else {
            var settings = {}; // Create settings object
            options = options.split(';'); // Split into array of options

            // Create a key/value pair for each setting
            options.forEach(function(option) {
                option = option.trim();
                if (option !== '') {
                    option = option.split(':');
                    settings[option[0]] = option[1].trim();
                }
            });

            return settings;
        }

    };

    // Update the URL
    // Private method
    // Runs functions
    var _updateURL = function(anchor, url) {
        if ((url === true || url === 'true') && history.pushState) {
            history.pushState({ pos: anchor.id }, '', anchor);
        }
    };

    // Start/stop the scrolling animation
    // Public method
    // Runs functions
    var animateScroll = function(toggle, anchor, options, event) {

        // Options and overrides
        options = _mergeObjects(_defaults, options || {}); // Merge user options with defaults
        var overrides = _getDataOptions(toggle ? toggle.getAttribute('data-options') : null);
        var speed = overrides.speed || options.speed;
        var easing = overrides.easing || options.easing;
        var updateURL = overrides.updateURL || options.updateURL;

        // Selectors and variables
        var headerHeight = 55;
        var startLocation = window.pageYOffset; // Current location on the page
        var endLocation = _getEndLocation(document.querySelector(anchor), headerHeight); // Scroll to location
        var animationInterval; // interval timer
        var distance = endLocation - startLocation; // distance to travel
        var timeLapsed = 0;
        var percentage, position;

        // Prevent default click event
        if (toggle && toggle.tagName === 'A' && event) {
            event.preventDefault();
        }

        // Update URL
        _updateURL(anchor, updateURL);

        // Stop the scroll animation when it reaches its target (or the bottom/top of page)
        // Private method
        // Runs functions
        var _stopAnimateScroll = function(position, endLocation, animationInterval) {
            var currentLocation = window.pageYOffset;
            if (position == endLocation || currentLocation == endLocation || ((window.innerHeight + currentLocation) >= document.body.scrollHeight)) {
                clearInterval(animationInterval);
                options.callbackAfter(toggle, anchor); // Run callbacks after animation complete
            }
        };

        // Loop scrolling animation
        // Private method
        // Runs functions
        var _loopAnimateScroll = function() {
            timeLapsed += 16;
            percentage = (timeLapsed / speed);
            percentage = (percentage > 1) ? 1 : percentage;
            position = startLocation + (distance * _easingPattern(easing, percentage));
            window.scrollTo(0, Math.floor(position));
            _stopAnimateScroll(position, endLocation, animationInterval);
        };

        // Set interval timer
        // Private method
        // Runs functions
        var _startAnimateScroll = function() {
            options.callbackBefore(toggle, anchor); // Run callbacks before animating scroll
            animationInterval = setInterval(_loopAnimateScroll, 16);
        };

        // Reset position to fix weird iOS bug
        // https://github.com/cferdinandi/smooth-scroll/issues/45
        if (window.pageYOffset === 0) {
            window.scrollTo(0, 0);
        }

        // Start scrolling animation
        _startAnimateScroll();

    };

    // Initialize Smooth Scroll
    // Public method
    // Runs functions
    var init = function(options) {

        // Feature test before initializing
        if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {

            // Selectors and variables
            options = _mergeObjects(_defaults, options || {}); // Merge user options with defaults
            var toggles = document.querySelectorAll('[data-scroll]'); // Get smooth scroll toggles

            // When a toggle is clicked, run the click handler
            Array.prototype.forEach.call(toggles, function(toggle, index) {
                toggle.addEventListener('click', animateScroll.bind(null, toggle, toggle.getAttribute('href'), options), false);
            });

        }

    };

    // Return public methods
    return {
        init: init,
        animateScroll: animateScroll
    };

})(window, document);


(function() {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

window.__forceSmoothScrollPolyfill__ = true;

function polyfill() {
    var w = window;
    var d = document;

    if (
        "scrollBehavior" in d.documentElement.style &&
        w.__forceSmoothScrollPolyfill__ !== true
    ) {
        return;
    }

    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
    };

    var now =
        w.performance && w.performance.now ?
        w.performance.now.bind(w.performance) :
        Date.now;

    function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];

        return new RegExp(userAgentPatterns.join("|")).test(userAgent);
    }


    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;


    function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
    }


    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }


    function shouldBailOut(firstArg) {
        if (
            firstArg === null ||
            typeof firstArg !== "object" ||
            firstArg.behavior === undefined ||
            firstArg.behavior === "auto" ||
            firstArg.behavior === "instant"
        ) {


            return true;
        }

        if (typeof firstArg === "object" && firstArg.behavior === "smooth") {

            return false;
        }

        throw new TypeError(
            "behavior member of ScrollOptions " +
            firstArg.behavior +
            " is not a valid value for enumeration ScrollBehavior."
        );
    }


    function hasScrollableSpace(el, axis) {
        if (axis === "Y") {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }

        if (axis === "X") {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
    }


    function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];

        return overflowValue === "auto" || overflowValue === "scroll";
    }

    function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
        var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");

        return isScrollableY || isScrollableX;
    }

    function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
        }

        return el;
    }

    function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME;

        elapsed = elapsed > 1 ? 1 : elapsed;

        value = ease(elapsed);

        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;

        context.method.call(context.scrollable, currentX, currentY);

        if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
        }
    }


    function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now();

        if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
        } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
        }

        step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y
        });
    }

    w.scroll = w.scrollTo = function() {
        if (arguments[0] === undefined) {
            return;
        }

        if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(
                w,
                arguments[0].left !== undefined ?
                arguments[0].left :
                typeof arguments[0] !== "object" ?
                arguments[0] :
                w.scrollX || w.pageXOffset,

                arguments[0].top !== undefined ?
                arguments[0].top :
                arguments[1] !== undefined ?
                arguments[1] :
                w.scrollY || w.pageYOffset
            );

            return;
        }

        smoothScroll.call(
            w,
            d.body,
            arguments[0].left !== undefined ?
            ~~arguments[0].left :
            w.scrollX || w.pageXOffset,
            arguments[0].top !== undefined ?
            ~~arguments[0].top :
            w.scrollY || w.pageYOffset
        );
    };

    w.scrollBy = function() {
        if (arguments[0] === undefined) {
            return;
        }

        if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(
                w,
                arguments[0].left !== undefined ?
                arguments[0].left :
                typeof arguments[0] !== "object" ?
                arguments[0] :
                0,
                arguments[0].top !== undefined ?
                arguments[0].top :
                arguments[1] !== undefined ?
                arguments[1] :
                0
            );

            return;
        }

        smoothScroll.call(
            w,
            d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset)
        );
    };

    Element.prototype.scroll = Element.prototype.scrollTo = function() {
        if (arguments[0] === undefined) {
            return;
        }

        if (shouldBailOut(arguments[0]) === true) {

            if (typeof arguments[0] === "number" && arguments[1] === undefined) {
                throw new SyntaxError("Value could not be converted");
            }

            original.elementScroll.call(
                this,

                arguments[0].left !== undefined ?
                ~~arguments[0].left :
                typeof arguments[0] !== "object" ?
                ~~arguments[0] :
                this.scrollLeft,

                arguments[0].top !== undefined ?
                ~~arguments[0].top :
                arguments[1] !== undefined ?
                ~~arguments[1] :
                this.scrollTop
            );

            return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top;

        smoothScroll.call(
            this,
            this,
            typeof left === "undefined" ? this.scrollLeft : ~~left,
            typeof top === "undefined" ? this.scrollTop : ~~top
        );
    };

    Element.prototype.scrollBy = function() {
        if (arguments[0] === undefined) {
            return;
        }

        if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(
                this,
                arguments[0].left !== undefined ?
                ~~arguments[0].left + this.scrollLeft :
                ~~arguments[0] + this.scrollLeft,
                arguments[0].top !== undefined ?
                ~~arguments[0].top + this.scrollTop :
                ~~arguments[1] + this.scrollTop
            );

            return;
        }

        this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
        });
    };

    Element.prototype.scrollIntoView = function() {
        if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(
                this,
                arguments[0] === undefined ? true : arguments[0]
            );

            return;
        }

        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {

            smoothScroll.call(
                this,
                scrollableParent,
                scrollableParent.scrollLeft + clientRects.left - parentRects.left,
                scrollableParent.scrollTop + clientRects.top - parentRects.top
            );


            if (w.getComputedStyle(scrollableParent).position !== "fixed") {
                w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: "smooth"
                });
            }
        } else {

            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: "smooth"
            });
        }
    };
}
(function() {
    polyfill();
})();