
let ele = document.createElement("div");
ele.innerHtml = "Top"
ele.style.width='100px';
ele.style.height='100px;'
ele.style.background = "gold"
ele.style.borderRadius = '50%'
ele.style.position = "absolute"
ele.style.bottom = "10px"
ele.style.zIndex = "10000000000"
ele.style.left = "10px"
ele.onclick = function(){
  window.scrollY
}
document.body.append(ele)
