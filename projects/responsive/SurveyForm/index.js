const checkbox = document.getElementById("toggle");
const div = document.getElementById("div-title");
const body = document.body;
checkbox.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(checkbox.checked);
      
    checkbox.classList.toggle("toggle-active");
    body.classList.toggle("active");


  }
);
