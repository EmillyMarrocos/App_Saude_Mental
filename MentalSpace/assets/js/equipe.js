<script type="text/javascript">
  document.addEventListener('DOMContentLoaded', function () {
    // Inicialização do carrossel
    const slides = document.querySelectorAll('.swiper-slide');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    document.querySelector('.swiper-button-next').addEventListener('click', nextSlide);
    document.querySelector('.swiper-button-prev').addEventListener('click', prevSlide);

    // Exibir pop-up ao clicar em um projeto
    const projectThumbnails = document.querySelectorAll('.project-thumbnail');
    const popup = document.querySelector('.popup');
    const popupContainer = document.querySelector('.popup-container');
    const closeBtn = document.querySelector('.close-btn');

    projectThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function () {
        const projectDetails = this.getAttribute('data-details');
        popupContainer.innerHTML = `
          <h2>Project Details</h2>
          <p>${projectDetails}</p>
          <button class="close-btn">Close</button>
        `;
        popup.style.display = 'flex';
      });
    });

    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });

    // Fechar o pop-up ao clicar fora da caixa
    popup.addEventListener('click', function (e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  });
</script>
