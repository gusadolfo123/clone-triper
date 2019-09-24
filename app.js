const images = document.querySelectorAll('.text-slider');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fancy');
    } else {
      entry.target.classList.remove('fancy');
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});