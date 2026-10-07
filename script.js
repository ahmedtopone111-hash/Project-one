const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
})




const savedTheme=localStorage.getItem("theme");
if(savedTheme==="light"){document.body.classList.add("light");themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeBtn.addEventListener("click",()=>{
 document.body.classList.toggle("light");

const light=document.body.classList.contains("light");
 localStorage.setItem("theme",light?"light":"dark");
 themeBtn.innerHTML=light?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';
});
