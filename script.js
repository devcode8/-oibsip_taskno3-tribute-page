  // scroll
  const navbar = document.querySelector("nav");
  console.log(navbar.getBoundingClientRect().top);
const navbarText =document.querySelectorAll(".nav_link");

  window.addEventListener("scroll",function(){
    if(navbar.getBoundingClientRect().top <= 0){
      navbar.classList.add("scroll");
      navbarText.forEach((text) => {
        text.style.color = "#fff";
      });
    }else{
      navbar.classList.remove("scroll");
      navbarText.forEach((text) => {
        text.style.color = "#000";
      });
    }
  });

//player
const closePlayer = document.querySelector("#close-player");
const musicPlayer = document.querySelector(".music-player");
const boxContainer = document.querySelector(".songs_container");

closePlayer.onclick =() =>{
  closePlayer.classList.toggle("fa-angle-up")
  closePlayer.classList.toggle('fa-xmark')
  musicPlayer.classList.toggle('active')
  boxContainer.classList.toggle('active')
}

let boxes = document.querySelectorAll("#Albums .songs_container .box");

boxes.forEach(box =>{
  box.onclick =() => {
    let src = box.getAttribute('data-src');
    let text = box.querySelector(".content h3").innerText;
    closePlayer.classList.toggle('fa-angle-up');
    closePlayer.classList.toggle('fa-xmark');
    musicPlayer.classList.add('active');
    boxContainer.classList.add('active');
    musicPlayer.querySelector("h3").innerText =text;
    musicPlayer.querySelector('audio').src=src;
    musicPlayer.querySelector('audio').play();
  }
})