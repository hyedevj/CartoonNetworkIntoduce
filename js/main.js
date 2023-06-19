new Swiper('.list .swiper', {
    direction: 'horizontal', //수평 슬라이드
    autoplay: { delay: 5000 }, // 5초씩 딜레이주고 자동재생
    loop: true, //반복재생O
    slidesPerView: 3, //한 슬라이드에 보여줄 갯수는 3개.
    spaceBetween: 10, //슬라이드 사이사이 여백을 10씩 준다.
    centeredSlides: true, //센터모드(true 인 경우 슬라이드는 항상 왼쪽이 아닌 가운데에 배치)
    pagination: { //페이지 번호
      el: '.list .swiper-pagination', 
      clickable: true 
    },
    navigation: {
      prevEl: '.list .swiper-button-prev', 
      nextEl: '.list .swiper-button-next'
    }
  })
  
  