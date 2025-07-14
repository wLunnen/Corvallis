const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}
