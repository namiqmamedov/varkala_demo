const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");


const optionsMain = document.getElementById("options")

const buttons = document.querySelectorAll('.type-btns button');


buttons.forEach(button => {
  button.addEventListener("click", function() {

    buttons.forEach(btn => {
      btn !== button ? btn.classList.remove('active') : btn.classList.add('active')
    })

  })
})

selectBtn.addEventListener("click",  function() {
  optionsMain.style.visibility = 'visible';
  optionMenu.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
    optionsMain.style.visibility = 'hidden';
  });
});



document.getElementById("myBtn").onclick = function() {myFunction()};

function myFunction() {
  var dropdownContent = document.getElementById("myDropdown");
  var arrowIcon = document.getElementById("arrowIcon");

  dropdownContent.classList.toggle("show");

  var mainWrapper = document.querySelector('#bottom-content');
  mainWrapper.classList.toggle('slide-down');

  if (arrowIcon.classList.contains('fa-chevron-down')) {
    arrowIcon.classList.remove('fa-chevron-down');
    arrowIcon.classList.add('fa-chevron-up');
} else {
    arrowIcon.classList.remove('fa-chevron-up');
    arrowIcon.classList.add('fa-chevron-down');
}
}



window.onclick = function(event) {
  
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var arrowIcon = document.getElementById("arrowIcon");
    var mainWrapper = document.getElementById("bottom-content");
      
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        mainWrapper.classList.remove('slide-down');
        arrowIcon.classList.remove('fa-chevron-up');
        arrowIcon.classList.add('fa-chevron-down');
      }
    }
  }
}

