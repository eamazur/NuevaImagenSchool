//FAQ Collapsible function

document.addEventListener('DOMContentLoaded', function() {
  let coll = document.getElementsByClassName("faq-container__collapsible-button");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      console.log(i);
      let content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
 });

