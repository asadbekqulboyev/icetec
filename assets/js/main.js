const pagination = document.querySelector('.custom_pagination');

  const swiper = new Swiper('.my_swiper', {
    slidesPerView: 1,
    on: {
      init: function () {
        this.slides.forEach((_, index) => {
          const bullet = document.createElement('span');
          bullet.className = 'custom_bullet';
          bullet.addEventListener('click', () => {
            this.slideTo(index);
          });
          pagination.appendChild(bullet);
        });

        pagination.children[0].classList.add('active');
      },
      slideChange: function () {
        [...pagination.children].forEach(b => b.classList.remove('active'));
        pagination.children[this.activeIndex].classList.add('active');
      }
    }
  });