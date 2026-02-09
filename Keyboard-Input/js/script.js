let $ = document;

const titleElem = document.querySelector(".title");

$.addEventListener("keyup", bodykeyup);

function bodykeyup(e) {
   appendValueToDom(e);

   const userEventKey = e.key.toUpperCase(); // 'S A D'

   const targetElement = $.getElementById(userEventKey);
   // console.log(targetElement);

   targetElement.classList.add("hit");

   targetElement.addEventListener("animationend", function () {
      targetElement.classList.remove("hit");
   });
   // console.log(targetElement);
}

function appendValueToDom(e) {
   console.log(e);

   if (e.code === "Backspace") {
      titleElem.innerHTML = titleElem.innerHTML.slice(0, -1);
      return;
   }

   if (e.key === "Escape") {
      e.preventDefault();
      return;
   }

   if (e.key === "Enter") {
      e.preventDefault();
      return;
   }

   titleElem.innerHTML += e.key;
}
