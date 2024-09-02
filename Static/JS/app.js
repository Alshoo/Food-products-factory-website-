// search icon
let searchicon = document.getElementById("searchicon");
let search_input = document.getElementById("search_input");

search_input.style.display = "none"
searchicon.onclick= () => {
    search_input.style.display = "inline"
}
search_input.onblur= () => {
    search_input.style.display = "none"
}


// write Effect
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// navbar

let Home_rout = document.querySelector("#Home_rout a p");
let Company_rout = document.querySelector("#Company_rout a p");
let Food_rout = document.querySelector("#Food_rout a p");
let Innvation_rout = document.querySelector("#Innvation_rout a p");
let Brands_rout = document.querySelector("#Brands_rout a p");
let News_rout = document.querySelector("#News_rout a p");
let Contact_rout = document.querySelector("#Contact_rout a p");


let coloring = () => {
  if (window.location.pathname == "/" || window.location.pathname == "/index.html" || window.location.pathname == "/index" ) {
    document.querySelector("#Home_rout a").style.color = "#0B6532";
    Home_rout.style.transform = "scale(1.02)!important";
    Home_rout.style.borderBottom = "#0B6532 solid 1px";
  }
  if (window.location.pathname == "/ourcampany.html" || window.location.pathname == "/ourcampany") {
    document.querySelector("#Company_rout a").style.color = "#0B6532";
    document.querySelector("#Company_rout2 a").style.color = "#0B6532";
    Company_rout.style.transform = "scale(1.02)!important";
    Company_rout.style.borderBottom = "#0B6532 solid 1px";
  }

  if (window.location.pathname == "/food.html"|| window.location.pathname == "/food") {
    document.querySelector("#Food_rout a").style.color = "#0B6532";
    Food_rout.style.transform = "scale(1.02)!important";
    Food_rout.style.borderBottom = "#0B6532 solid 1px";
    document.querySelector("#Company_rout a").style.color = "#0B6532";
    Company_rout.style.transform = "scale(1.02)!important";
    Company_rout.style.borderBottom = "#0B6532 solid 1px";

  }
  if (window.location.pathname == "/innvation.html"||window.location.pathname == "/innvation" ) {
    document.querySelector("#Innvation_rout a").style.color = "#0B6532";
    Innvation_rout.style.transform = "scale(1.02)!important";
    Innvation_rout.style.borderBottom = "#0B6532 solid 1px";
    document.querySelector("#Company_rout a").style.color = "#0B6532";
    Company_rout.style.transform = "scale(1.02)!important";
    Company_rout.style.borderBottom = "#0B6532 solid 1px";

  }
  if (window.location.pathname == "/brands.html"||window.location.pathname == "/brands") {
    document.querySelector("#Brands_rout a").style.color = "#0B6532";
    Brands_rout.style.transform ="scale(1.02)!important";
    Brands_rout.style.borderBottom = "#0B6532 solid 1px";

  }
  if (window.location.pathname == "/news.html"|| window.location.pathname == "/news") {
    document.querySelector("#News_rout a").style.color = "#0B6532";
    News_rout.style.transform = "scale(1.02)!important";
    News_rout.style.borderBottom = "#0B6532 solid 1px";

  }
  if (window.location.pathname == "/contact.html"||window.location.pathname == "/contact") {
    document.querySelector("#Contact_rout a").style.color = "#0B6532";
    Contact_rout.style.transform = "scale(1.02)!important";
    Contact_rout.style.borderBottom = "#0B6532 solid 1px";

  }
};
coloring(); 


// GSAP
// hidden right
let observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showw')
    }else{
      entry.target.classList.remove('showw')
    }
  })
})
let hidddenElement = document.querySelectorAll('.hidddenright');
hidddenElement.forEach((el) => observer.observe(el))

// hidden left
let observer2 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showw')
    }else{
      entry.target.classList.remove('showw')
    }
  })
})
let hidddenElement2 = document.querySelectorAll('.hidddenleft');
hidddenElement2.forEach((el) => observer2.observe(el))

// hidddenbutton
let observer3 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showw')
    }else{
      entry.target.classList.remove('showw')
    }
  })
})
let hidddenElement3 = document.querySelectorAll('.hidddenbutton');
hidddenElement3.forEach((el) => observer3.observe(el))

// hidddentop
let observer4 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showw')
    }else{
      entry.target.classList.remove('showw')
    }
  })
})
let hidddenElement4 = document.querySelectorAll('.hidddentop');
hidddenElement4.forEach((el) => observer4.observe(el))




// Read more function

$(document).ready(function(){
     function AddReadMore() {
      var carLmt = 100;
      var readMoreTxt = " Read more";
      var readLessTxt = " Read less";


      $(".add-read-more").each(function () {
         if ($(this).find(".first-section").length)
            return;

         var allstr = $(this).text();
         if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'> <br>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
         }
      });

      $(document).on("click", ".read-more,.read-less", function () {
         $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
      });
   }

   AddReadMore();
});



// shy cheese 
let mainIMG = document.getElementById("mainIMG434");
let mousing_ing = document.querySelectorAll("#mousing_ing img");

mousing_ing.forEach((element) => {
  element.onmouseover = ()=>{
    mainIMG.src = element.src
  }
});





