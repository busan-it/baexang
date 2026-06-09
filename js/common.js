$(document).ready(function(){ //실행틀 시작

  // 명령어는 실행틀 안에 작성
  // .btn-ham 을 클릭하면 다음과 같은 일이 일어남
  // .mgnb-wrap 이 서서히 나와라
  $(".btn-ham").click(function(){
    $(".mgnb-wrap").fadeIn();
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").fadeOut();
  });

  $(".btn-search").click(function(){
    $(".search").fadeIn();
  });

  $(".search-close").click(function(){
    $(".search").fadeOut();
  });


  const visual_list = new Swiper('.visual-list', {
    // 옵션(parameter) 추가
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const insight_list = new Swiper('.insight-list', {
    // 옵션(parameter) 추가
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: {
        // 가로해상도가 1200px 이상일 경우
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        // 가로해상도가 768px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});// 실행틀 끝