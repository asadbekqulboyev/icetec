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

document.addEventListener("DOMContentLoaded", function () {
  const progress = document.querySelector(".tops_progress");
  const thumb = document.querySelector(".tops_progress_thumb");

  const swiper = new Swiper(".tops_swiper", {
    loop: true,
    speed: 300,
    spaceBetween: 2,
    freeMode: {
      enabled: true,
      momentum: true,
      momentumRatio: 0.8,
      momentumVelocityRatio: 0.8,
    },

    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },

    navigation: {
      nextEl: ".tops_next",
      prevEl: ".tops_prev",
    },
    scrollbar: {
      el: ".tops_scrollbar",
      draggable: true,
      hide: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2.1,
      },
      576: {
        slidesPerView: 2.3,
      },
      992: {
        slidesPerView: 4.1, // 5-rasm chiqib turadi
        spaceBetween: 5,
      },
    },
  });

  // function updateThumb(sw) {
  //   const slidesPerGroup = sw.params.slidesPerGroup;

  //   const totalRealSlides = sw.slides.length - sw.loopedSlides * 2;

  //   const totalPages = Math.ceil(totalRealSlides / slidesPerGroup);

  //   const currentPage = Math.floor(sw.realIndex / slidesPerGroup) % totalPages;

  //   const trackWidth = progress.offsetWidth;
  //   const thumbWidth = trackWidth / totalPages;

  //   thumb.style.width = `${thumbWidth}px`;
  //   thumb.style.transform = `translateX(${thumbWidth * currentPage}px)`;
  // }
});
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".comments_content_block", {
    loop: true,
    speed: 500,
    spaceBetween: 14,

    slidesPerView: "auto",
    freeMode: {
      enabled: true,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: false,
    },

    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },

    navigation: {
      nextEl: ".comments_next",
      prevEl: ".comments_prev",
    },

    scrollbar: {
      el: ".comments_scrollbar",
      draggable: true,
      hide: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3.1,
      },
      1280: {
        slidesPerView: 3.4,
      },
      1440: {
        slidesPerView: 4.2,
      },
    },

    on: {
      init: equalizeCommentsHeight,
      resize: equalizeCommentsHeight,
      setTranslate: equalizeCommentsHeight,
    },
  });
  const product_comments_slider = new Swiper(".product_comments_slider", {
    loop: true,
    speed: 500,
    spaceBetween: 8,

    slidesPerView: "auto",
    freeMode: {
      enabled: true,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: false,
    },

    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },

    navigation: {
      nextEl: ".comments_next",
      prevEl: ".comments_prev",
    },

    scrollbar: {
      el: ".comments_scrollbar",
      draggable: true,
      hide: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },

    on: {
      init: equalizeCommentsHeight,
      resize: equalizeCommentsHeight,
      setTranslate: equalizeCommentsHeight,
    },
  });
  function equalizeCommentsHeight() {
    const items = document.querySelectorAll(".comments_item");
    let maxHeight = 0;

    items.forEach((item) => (item.style.height = "auto"));

    items.forEach((item) => {
      maxHeight = Math.max(maxHeight, item.offsetHeight);
    });

    items.forEach((item) => {
      item.style.height = `${maxHeight}px`;
    });
  }
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
  if (!sort_content) return;
  const sort_top = sort_content.querySelector(".sort_top");
  const sort_input = sort_content.querySelector("input");
  const sort_options = sort_content.querySelector(".sort_options");
  const option_links = sort_options ? sort_options.querySelectorAll("a") : [];
  if (sort_top && sort_options) {
    sort_top.addEventListener("click", function (e) {
      e.stopPropagation();
      sort_options.classList.toggle("active");
      sort_top.classList.toggle("active");
    });
  }
  option_links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const span = this.querySelector("span");
      if (span && sort_input) {
        sort_input.value = span.innerText;
      }
      sort_options.classList.remove("active");
      sort_top.classList.remove("active");
    });
  });
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

const product_main = new Swiper(".product_main", {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper_button_prev",
    prevEl: ".swiper_button_next",
  },
  pagination: {
    el: ".swiper_pagination",
    clickable: true,
  },
});

const PRICE = 14990;
const DISCOUNT = 30000;
const counts = document.querySelectorAll(".count");
const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");
const sumPrice = document.getElementById("sum_price");
const total = document.getElementById("total");
function updateTotal() {
  if (!sumPrice || !total || !counts.length) return;

  let items = 0;
  counts.forEach((c) => {
    items += Number(c.textContent) || 0;
  });

  let sum = items * PRICE;
  let final = Math.max(0, sum - DISCOUNT);

  sumPrice.textContent = sum.toLocaleString() + " ₽";
  total.textContent = final.toLocaleString() + " ₽";
}

plusBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    counts[i].textContent++;
    updateTotal();
  });
});

minusBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (counts[i].textContent > 1) {
      counts[i].textContent--;
      updateTotal();
    }
  });
});

updateTotal();
const promo_top = document.querySelector(".promo_top");

if (promo_top) {
  promo_top.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");

    const code = document.querySelector(".code");
    if (code) {
      code.classList.toggle("active");
    }
  });
}
const codeEl = document.querySelector(".code");
const copyEl = document.querySelector(".copy");
if (codeEl && copyEl) {
  codeEl.addEventListener("click", function () {
    navigator.clipboard.writeText(this.textContent);
    copyEl.classList.add("active");

    setTimeout(() => {
      copyEl.classList.remove("active");
    }, 7000);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".open_size_modal");
  const modal = document.querySelector(".modal"); // ✅ TO‘G‘RILANDI
  const closeBtn = modal?.querySelector(".size_modal_close");
  const overlay = modal?.querySelector(".size_modal_overlay");

  if (!openBtn || !modal) return;

  const modalItems = modal.querySelectorAll(".modal_size_item");
  const productLabels = document.querySelectorAll(".product_sizes_items label");

  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });

  closeBtn?.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  overlay?.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  modalItems.forEach((item) => {
    item.addEventListener("click", () => {
      const size = item.dataset.size;

      modalItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      productLabels.forEach((label) => {
        const input = label.querySelector("input");
        if (!input) return;

        if (label.dataset.size === size) {
          input.checked = true;
          label.classList.add("active");
        } else {
          label.classList.remove("active");
        }
      });

      modal.classList.remove("open");
    });
  });
});