// accordion
const accordion = document.querySelectorAll('.have-question__list__item');
for (item of accordion) {
  item.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
        for (element of accordion) {
          element.classList.remove('active');
      }
      this.classList.add('active');
    }
  })
}
