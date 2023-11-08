function openPopup(){
  var popup = document.getElementById('popupMessage');
  var overlay = document.getElementById('overlay');
popup.style.display = 'block';
overlay.style.display = 'block';
}

function closePopup(){
  var popup = document.getElementById('popupMessage');

popup.style.display = 'none';
overlay.style.display = 'none';
}

document.querySelectorAll('.nav-links a').forEach(link =>{
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({behavior:'smooth'});
  })
})

