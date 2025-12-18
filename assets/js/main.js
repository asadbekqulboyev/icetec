const pagination = document.querySelector(".custom_pagination");

const swiper = new Swiper(".my_swiper", {
  slidesPerView: 1,
  on: {
    init: function () {
      this.slides.forEach((_, index) => {
        const bullet = document.createElement("span");
        bullet.className = "custom_bullet";
        bullet.addEventListener("click", () => {
          this.slideTo(index);
        });
        pagination.appendChild(bullet);
      });

      pagination.children[0].classList.add("active");
    },
    slideChange: function () {
      [...pagination.children].forEach((b) => b.classList.remove("active"));
      pagination.children[this.activeIndex].classList.add("active");
    },
  },
});
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.add("active");
  document.querySelector(".nav_list").classList.add("active");
});
const exit_menu = document.querySelector(".exit_menu");
exit_menu.addEventListener("click", function () {
  document.querySelector(".nav_list").classList.remove("active");
});
const only_mobile = document.querySelector(".only_mobile");
only_mobile.addEventListener("click", function () {
  document.querySelector(".search_input").classList.toggle("active");
});
