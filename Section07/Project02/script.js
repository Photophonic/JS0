'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

console.log(btnShowModal);

//adds event listener to all buttons since there are more than one.
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    console.log(btnShowModal[i].textContent);
    //calls the stored variable above, then removes the assigned class from the HTML
    //does not require the . since this is not selecting something.
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

//restore the class hidden to the html. Targets the 'X' button ont he overlay.
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
