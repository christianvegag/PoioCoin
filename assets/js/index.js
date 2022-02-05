const jsonParticles = {
  particles: {
    number: {
      value: 76,
      density: {
        enable: !0,
        value_area: 5839.692548078818,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/svg/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.6392095897221408,
      random: !0,
      anim: {
        enable: !1,
        speed: 1,
        opacity_min: 0,
        sync: !1,
      },
    },
    size: {
      value: 2,
      random: !0,
      anim: {
        enable: !1,
        speed: 4,
        size_min: 0.3,
        sync: !1,
      },
    },
    line_linked: {
      enable: !1,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: !0,
      speed: 0.4,
      direction: "none",
      random: !0,
      straight: !1,
      out_mode: "out",
      bounce: !1,
      attract: {
        enable: !1,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: !1,
        mode: "bubble",
      },
      onclick: {
        enable: !1,
        mode: "repulse",
      },
      resize: !0,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 4.475524475524476,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 367.6323676323676,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: !0,
};

const sectionWithParticles = [
  "particles-js",
  "particles-js2",
  "particles-js3",
  "particles-js4",
];

sectionWithParticles.forEach((s) => {
  if (document.getElementById(s)) {
    particlesJS(s, jsonParticles);
  }
});

// Swiper - Extra Step - add arrows and pagination html markup by code (Append)
let pagination = "<div class=swiper-pagination></div>";
let next_prev_buttons =
  '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';
let scrollbar = '<div class="swiper-scrollbar"></div>';
let swiperNodes = pagination + next_prev_buttons;
/* loop throw all swipers on the page */
$(".swiper-container").each(function (index) {
  $(this).append(swiperNodes);
});

// swiper JS Initialize

let mySwiper = new Swiper(".first-swiper", {
  mousewheel: {
    invert: !0,
  },
  spaceBetween: 0,
  speed: 300,
  lazy: !0,
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-previous",
  },
  keyboard: {
    enabled: !0,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    478: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    988: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1920: {
      slidesPerView: 10,
      spaceBetween: 0,
    },
  },
});

let clipboard = new Clipboard(".cta-copy");
clipboard.on("success", function (o) {
  console.log(o), $(".result-div").click();
}),
  clipboard.on("error", function (o) {
    console.log(o);
  });

//   Remove Hash Script (c) Noname
$(document).ready(function () {
  $(".nav-link, .nav-drop-link, .scroll-up-cta, .hero__scrollbtn").click(() => {
    setTimeout(() => {
      history.replaceState(
        "",
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    }, 5);
  });
});
