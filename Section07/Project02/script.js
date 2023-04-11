'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const showModal = function () {
  //calls the stored variable above, then removes the assigned class from the HTML
  //does not require the . since this is not selecting something.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function to close the modal window. Will be called by multiple items.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//adds event listener to all buttons since there are more than one.
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', showModal);
}

//restore the class hidden to the html. Targets the 'X' button ont he overlay.
//do not use () for close modal, this will prevent JS from calling the function
//as soon as the page loads. Instead it will only call function when clicked.
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//there are three types of keyX items. Down fires as soon as pressed.
document.addEventListener('keydown', function (e) {
  //funciton e will capture the internal methods to addEventListener.
  //This allows you to tap into the keys pressed for keydown.
  //Add logic to do whatever for modal window, e.g. add classes to html.
  if (e.key === 'Escape') {
    //this calls the function
    closeModal();
  }
});
