// Navigation //
const header = document.querySelector("header");
const hamburger = document.querySelector(".burger-container");
const navLinks = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li");
const hrefs = document.querySelectorAll("header .navLinks li a");
const navBar = document.querySelector("nav");
const topOfNav = header.offsetTop;
const logo = document.querySelector(".logo-container");
const heroSection = document.querySelector("section.hero");
const aboutSection = document.querySelector("section.about-me");
const width = window.innerWidth;
const resume = document.querySelector(".resume");
const fixNav = document.getElementsByClassName("fixed-nav");
const topOfResume = resume.offsetTop - 60;
const portfolio = document.querySelector(".portfolio");
const topOfPortfolio = portfolio.offsetTop - 20;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

hrefs.forEach(href => {
  href.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
    links.forEach(link => {
      link.classList.remove("fade");
    });
  });
});

function fixedNav() {
  if(window.scrollY >= 30) {
    navBar.style.top = 0 + "px";
    header.classList.remove("hidden");
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
    header.classList.add("hidden");
  }
};

function checkTop() {
  if(width <= 479) {
    heroSection.style.top = 0 + "px";
  } else if (width <= 767) {
    console.log("width = 767px");
  } else if (width <= 991) {
    console.log("width = 991px");
  } else {
    fixedNav();
  }
};

function navBg() {
  if (window.scrollY >= topOfResume) {
    navBar.classList.add("light-bg");
    if (window.scrollY >= topOfPortfolio) {
      navBar.classList.remove("light-bg");
    }
  } else {
    navBar.classList.remove("light-bg");
  }
};

window.addEventListener("load", () => {
  checkTop();
  setTimeLine();
});

window.addEventListener("scroll", () => {
  fixedNav();
  checkTop();
  navBg();
});

// <<<< Smooth Scroll >>>> //

// <<<< Percentage Animation https://codepen.io/rachsmith/pen/BqpCd >>>> //
const about = document.querySelector(".about-container");
const topOfAbout = about.offsetTop + 423;
const progBar1 = document.querySelector("#prog-bar1");
const progBar2 = document.querySelector("#prog-bar2");
const progBar3 = document.querySelector("#prog-bar3");
const progBar4 = document.querySelector("#prog-bar4");
const progBar5 = document.querySelector("#prog-bar5");
const value1 = progBar1.dataset.value;
const value2 = progBar2.dataset.value;
const value3 = progBar3.dataset.value;
const value4 = progBar4.dataset.value;
const value5 = progBar5.dataset.value;

const rule1 = CSSRulePlugin.getRule("#prog-bar1:after"); 
const rule2 = CSSRulePlugin.getRule("#prog-bar2:after");
const rule3 = CSSRulePlugin.getRule("#prog-bar3:after");
const rule4 = CSSRulePlugin.getRule("#prog-bar4:after");
const rule5 = CSSRulePlugin.getRule("#prog-bar5:after");
const span1 = CSSRulePlugin.getRule("#sp1");
const span2 = CSSRulePlugin.getRule("#sp2");
const span3 = CSSRulePlugin.getRule("#sp3");
const span4 = CSSRulePlugin.getRule("#sp4");
const span5 = CSSRulePlugin.getRule("#sp5");



document.addEventListener("DOMContentLoaded", function(event) {
  
  // wait until external stylesheets, links, images, and other external assets are loaded in the window
  window.addEventListener("load", function(){

        // custom GSAP code goes here

              window.onscroll = function aboutTop() {
                if(window.scrollY >= topOfAbout && window.scrollY <= 1800) {
                  TweenMax.to(rule1, 2, {
                    cssRule: {
                      width: value1 + "%"
                    }
                  })
                  TweenMax.to(span1, 2, {
                    cssRule: {
                      left: 87.5 + "%"
                    }
                  })
                  TweenMax.to(rule2, 2, {
                    cssRule: {
                      width: value2 + "%"
                    }
                  })
                  TweenMax.to(span2, 2, {
                    cssRule: {
                      left: 81.5 + "%"
                    }
                  })
                  TweenMax.to(rule3, 2, {
                    cssRule: {
                      width: value3 + "%"
                    }
                  })
                  TweenMax.to(span3, 2, {
                    cssRule: {
                      left: 89.5 + "%"
                    }
                  })
                  TweenMax.to(rule4, 2, {
                    cssRule: {
                      width: value4 + "%"
                    }
                  })
                  TweenMax.to(span4, 2, {
                    cssRule: {
                      left: 84.5 + "%"
                    }
                  })
                  TweenMax.to(rule5, 2, {
                    cssRule: {
                      width: value5 + "%"
                    }
                  })
                  TweenMax.to(span5, 2, {
                    cssRule: {
                      left: 74.5 + "%"
                    }
                  })
                } else if(window.scrollY < 800) {
                    TweenMax.to(rule1, 2, {
                      cssRule: {
                        width: 0
                      }
                    })
                    TweenMax.to(span1, 2, {
                      cssRule: {
                        left: -10.5 + "%"
                      }
                    })
                    TweenMax.to(rule2, 2, {
                      cssRule: {
                        width: 0
                      }
                    })
                    TweenMax.to(span2, 2, {
                      cssRule: {
                        left: -10.5 + "%"
                      }
                    })
                    TweenMax.to(rule3, 2, {
                      cssRule: {
                        width: 0
                      }
                    })
                    TweenMax.to(span3, 2, {
                      cssRule: {
                        left: -10.5 + "%"
                      }
                    })
                    TweenMax.to(rule4, 2, {
                      cssRule: {
                        width: 0
                      }
                    })
                    TweenMax.to(span4, 2, {
                      cssRule: {
                        left: -10.5 + "%"
                      }
                    })
                    TweenMax.to(rule5, 2, {
                      cssRule: {
                        width: 0
                      }
                    })
                    TweenMax.to(span5, 2, {
                      cssRule: {
                        left: -10.5 + "%"
                      }
                    })
                }
              }

        
    
  }, false);
  
});


// <<<< Dynamic Resume Timeline https://codepen.io/Mobius1/pen/RjgzoK?editors=0010 >>>> //
const timelineWrap = document.querySelector(".timeline-wrap");
const nodes = Array.from(document.querySelectorAll(".timeline-icons"));
const hrs = Array.from(document.querySelectorAll(".timeline-content hr"));
const iconBody = document.querySelectorAll(".g-01");
const iconDetail = document.querySelectorAll(".g-02")
const cache = {
	viewport: {},
	rects: []
};

// init
window.addEventListener("load", init);

function init() {
	// update the cache and check scroll position
	recache();

	// throttle the scroll callback for performance
	document.addEventListener("scroll", throttle(scrollCheck, 10));

	// debounce the resize callback for performance
	window.addEventListener("resize", debounce(recache, 50));
};

// update the cache and check scroll position
function recache() {
	// cache the viewport dimensions
	cache.viewport = {
			width: window.innerWidth,
			height: window.innerHeight
	};

	// cache node dimensions because we don't really want to
	// call getBoundingClientRect() during scroll - even when throttled
	nodes.forEach((node, i) => {
		cache.rects[i] = rect(node);
	});

	scrollCheck();
}

// check whether a node is at or above the horizontal halfway mark
function scrollCheck() {
	// instead of relying on calling getBoundingClientRect() everytime,
	// let's just take the cached value and subtract the pageYOffset value
	// and see if the result is at or above the horizontal midline of the window
	const offset = getScrollOffset();
	const midline = cache.viewport.height * 0.5;

	cache.rects.forEach((rect, i) => {
		nodes[i].classList.toggle("active-icons", rect.y - offset.y < midline);
    hrs[i].classList.toggle("active-hr", rect.y - offset.y < midline);
  });
  console.log(cache.rects)
  console.log(iconDetail)
  iconBody[0].classList.toggle("g-01-active", cache.rects[0].y - offset.y < midline);
  iconBody[1].classList.toggle("g-01-active", cache.rects[0].y - offset.y < midline);
  iconBody[2].classList.toggle("g-01-active", cache.rects[1].y - offset.y < midline);
  iconDetail[0].classList.toggle("g-02-active", cache.rects[1].y - offset.y < midline);
};

// get the scroll offsets
function getScrollOffset() {
	return {
		x: window.pageXOffset,
		y: window.pageYOffset
	};
};

// throttler
function throttle(fn, limit, context) {
	let wait;
	return function() {
		context = context || this;
		if (!wait) {
			fn.apply(context, arguments);
			wait = true;
			return setTimeout(function() {
				wait = false;
			}, limit);
		}
	};
};

// debouncer
function debounce(fn, limit, u) {
	let e;
	return function() {
		const i = this;
		const o = arguments;
		const a = u && !e;
		clearTimeout(e),
			(e = setTimeout(function() {
			(e = null), u || fn.apply(i, o);
		}, limit)),
			a && fn.apply(i, o);
	};

}

// getBoundingClientRect with offsets
function rect(e) {
	const o = getScrollOffset();
	const r = e.getBoundingClientRect();

	return {
			x: r.left + o.x,
			y: r.top + o.y
	};
};

// change timeline position based upon surronding elements
const timelineHeader = document.querySelector(".timeline-header");
const timelineContent = document.querySelector(".timeline-content");
const timelineBlock = document.querySelector(".timeline-block")
const icon = document.querySelector(".timeline-icons");

let headerRect = timelineHeader.getBoundingClientRect();
let contentRect = timelineContent.getBoundingClientRect();
let blockRect = timelineBlock.getBoundingClientRect();
let icoRect = icon.getBoundingClientRect();
let icoWidth = icoRect.width / 2;

let headerRight = headerRect.right;
let contentLeft = contentRect.left;
let blockLeft = blockRect.left;
let blockWidth = blockRect.width;
let distance = (contentLeft - headerRight) / 2;
let mobileStart = (width - blockWidth) / 2;

let rectCenter = (headerRight + contentLeft) / 2 + "px";
let iconLeft = ((headerRect.width + distance) - icoWidth) + 2.5 + "px";
let mobileRectCenter = (mobileStart + icoWidth) - 2.5 + "px";
let mobileIconPosition = blockLeft + "px";

function setTimeLine() {
  if(width <= 479) {
    document.querySelectorAll('.timeline-wrap')[0].style.setProperty("--left", mobileRectCenter);
    nodes[0].style.setProperty("left", 0 + "px");
    nodes[1].style.setProperty("left", 0 + "px"); 
  } else if (width <= 767) {
      console.log("width = 767px");
  } else {
      document.querySelectorAll('.timeline-wrap')[0].style.setProperty("--left", rectCenter);
      nodes[0].style.setProperty("left", iconLeft);
      nodes[1].style.setProperty("left", iconLeft);
  }
}

// <<<< Portfolio cards https://codepen.io/rachsmith/pen/PWxoLN >>>> //
const boxes = [
  {box: document.querySelector('.box1'), overlay: document.querySelector('.box1 .logo-overlay')},
  {box: document.querySelector('.box2'), overlay: document.querySelector('.box2 .logo-overlay')},
  {box: document.querySelector('.box3'), overlay: document.querySelector('.box3 .logo-overlay')},
  {box: document.querySelector('.box4'), overlay: document.querySelector('.box4 .logo-overlay')},
  {box: document.querySelector('.box5'), overlay: document.querySelector('.box5 .logo-overlay')},
  {box: document.querySelector('.box6'), overlay: document.querySelector('.box6 .logo-overlay')}
];

const hideOverlays = (div) => {
  div.classList.add("hidden");
}

const showOverlays = (div) => {
  div.classList.remove("hidden");
}

boxes.forEach(box => {
  box.box.onmouseover = function() {
    hideOverlays(box.overlay);
  }
  
  box.box.onmouseout = function() {
    showOverlays(box.overlay);
  }
})