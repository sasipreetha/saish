var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function show(tabname){
for(tabl of tablinks){
    tabl.classList.remove("active-link");
}
for(tabc of tabcontents){
    tabc.classList.remove("active-tab");
}

event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby0iNoso8fiFjPWzeYJ4Ywte0W06Npsej3quFM-29G_nXjJ83viG__0R4HTl5slTXoaAw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })