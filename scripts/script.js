document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.reviews-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20, 
        centeredSlides: false, 
      
        grabCursor: true, 
        
        
        breakpoints: {
            320: {
                spaceBetween: 10
            },
            768: {
                spaceBetween: 20
            },
            
        }
    });

    const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                
                item.addEventListener('click', function() {
                    // Закрываем все элементы
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('open');
                        }
                    });
                    
                    // Переключаем текущий элемент
                    item.classList.toggle('open');
                });
            });
});