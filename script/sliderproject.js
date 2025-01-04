const prev = document.getElementById('leftbutton')
const next = document.getElementById('rightbutton')
const list = document.getElementById('projectlist')
const itemWidth = 350
const padding = 20

prev.addEventListener('click',()=>{
  console.log('Left button clicked');
  list.scrollLeft -= (itemWidth + padding);
  console.log('New scrollLeft:', list.scrollLeft);
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})