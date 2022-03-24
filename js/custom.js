//Scroll

// We select the element we want to target
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scroll-top-btn");
var rootElement = document.documentElement;

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);


// Tabs

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    })
  })
  

// Equal Height

$(window).on("load resize", function () {
    var maxHeight = 0;
    $(".news-block .card-item").find(".card-name").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);

    $(".news-block .card-item").find(".card-description").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
});