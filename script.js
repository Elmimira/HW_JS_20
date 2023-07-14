var currentSlide = 0;
var totalSlides = document.getElementById('slider').childElementCount;

// Приховуємо кнопку "Prev" на початку
document.getElementById('prevBtn').style.display = 'none';

// Функція для відображення поточного слайда
function showSlide(index) {
    var slides = document.getElementById('slider').getElementsByTagName('img');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';

    // Перевіряємо, чи потрібно приховати або показати кнопки "Prev" та "Next"
    if (index === 0) {
        document.getElementById('prevBtn').style.display = 'none';
    } else {
        document.getElementById('prevBtn').style.display = 'block';
    }
    if (index === totalSlides - 1) {
        document.getElementById('nextBtn').style.display = 'none';
    } else {
        document.getElementById('nextBtn').style.display = 'block';
    }
}

// Обробник події для кнопки "Prev"
document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

// Обробник події для кнопки "Next"
document.getElementById('nextBtn').addEventListener('click', function () {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

// Початкове відображення першого слайда
showSlide(currentSlide);
