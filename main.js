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

const tOriginal = "ON THE ROUTE TO BEING A WEB DEVELOPER,";
const tSecondary = " SEBASTIAN RODRIGUEZ.";
const msj = document.getElementById("msj");
const durationDelete = 100;
const durationWrite = 100;

function deleteAndWrite() {
  console.log("deleteAndWrite called");
  let text = msj.innerText;
  let long = text.length;

  if (long > 0) {
    msj.innerText = text.substring (0, long - 1);
    setTimeout (deleteAndWrite , durationDelete);
  }else {
    setTimeout( writeText , durationWrite);
  }
}

function writeText() {
  console.log("writeText called");
  let text = tOriginal + tSecondary;
  let long = msj.innerText.length;

  if (long < text.length) {
    msj.innerText = text.substring(0, long + 1);
    setTimeout(writeText, durationWrite);
  } else {
    setTimeout(deleteAndWrite, durationDelete);
  }
}
deleteAndWrite();

document.getElementById("icon-menu").
  addEventListener('click', showMenu);
function showMenu() {
  document.getElementById('move-content').classList.toggle('move-container-all');

  document.getElementById('show-menu').classList.toggle('show-lateral');
}

// -------CLOSE LATERAL------

document.addEventListener('click', function (event){
  if (!event.target.closest('#icon-menu') && !event.target.closest('.nav.links')){
    var lateral = document.querySelector('.show-lateral');

    if(lateral) {
      lateral.classList.remove('show-lateral');
    }
  }
});

