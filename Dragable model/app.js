const wrapper = document.querySelector(".wrapper");
const header = wrapper.querySelector("header");
const register = document.querySelector('.register');
const close = document.querySelector('.close');
const cancel = document.querySelector('.canbtn')

function onDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(wrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  wrapper.style.left = `${leftVal + movementX}px`;
  wrapper.style.top = `${topVal + movementY}px`;
}
header.addEventListener("mousedown", ()=>{
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", ()=>{
  header.classList.remove("active");
  header.removeEventListener("mousemove", onDrag);
});

register.addEventListener('click',function(){
    wrapper.classList.add('wrappers');
});

close.addEventListener('click',function(){
    wrapper.classList.remove('wrappers');
});

cancel.addEventListener('click',function (){
    wrapper.classList.remove('wrappers');
});
