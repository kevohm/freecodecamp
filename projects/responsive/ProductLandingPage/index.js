const dropdown = document.querySelector(".dropbtn");
const body = document.body;

dropdown.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("dropdown-active");
    body.classList.toggle("body-active");
});

    
