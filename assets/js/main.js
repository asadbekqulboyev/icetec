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
document.addEventListener("DOMContentLoaded", function () {
  const sort_content = document.querySelector(".sort_content");
  const sort_top = sort_content.querySelector(".sort_top");
  const sort_input = sort_content.querySelector("input");
  const sort_options = sort_content.querySelector(".sort_options");
  const option_links = sort_options.querySelectorAll("a");

  // TOP bosilganda ochish / yopish
  sort_top.addEventListener("click", function () {
    sort_options.classList.toggle("active");
    sort_top.classList.toggle("active");
  });

  // OPTION bosilganda
  option_links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const text = this.querySelector("span").innerText;
      sort_input.value = text;

      // yopish
      sort_options.classList.remove("active");
      sort_top.classList.remove("active");
    });
  });

  // tashqariga bosilganda yopish (optional, professional)
  document.addEventListener("click", function (e) {
    if (!sort_content.contains(e.target)) {
      sort_options.classList.remove("active");
      sort_top.classList.remove("active");
    }
  });
});
document.addEventListener("click", function (e) {
  const like = e.target.closest(".like");
  if (!like) return;

  like.classList.toggle("active");
});

const thumbs = new Swiper(".product_thumbs", {
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 28,
});

const main = new Swiper(".product_main", {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: thumbs,
  },
});
