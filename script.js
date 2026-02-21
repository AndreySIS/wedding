function openInvite(){
  const intro = document.getElementById("intro");

  intro.classList.add("hide");

  document.body.classList.remove("locked");

  setTimeout(()=>{
    intro.style.display="none";
  },1000);
}

/* reveal animation */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < trigger) el.classList.add("visible");
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
