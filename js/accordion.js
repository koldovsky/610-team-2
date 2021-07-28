// accordion
const accordion = document.querySelectorAll('.have-question__list-item');
for (const item of accordion) {
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
