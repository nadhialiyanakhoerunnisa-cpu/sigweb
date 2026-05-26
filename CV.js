// ======================
// DARK MODE
// ======================

const darkBtn = document.getElementById("drakmodeBtn");

darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


// ======================
// FILTER PENDIDIKAN
// ======================

function filterPendidikan(category) {

  const items = document.querySelectorAll(".pendidikan");

  items.forEach(function(item){

    if(category === "all" || item.classList.contains(category)){
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }

  });

}


// ======================
// FILTER PENGALAMAN
// ======================

function filterPengalaman(category) {

  const items = document.querySelectorAll(".pengalaman");

  items.forEach(function(item){

    if(category === "all" || item.classList.contains(category)){
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }

  });

}


// ======================
// FILTER SKILL
// ======================

function filterSkill(category) {

  const items = document.querySelectorAll(".skill");

  items.forEach(function(item){

    if(category === "all" || item.classList.contains(category)){
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }

  });

}


// ======================
// VALIDASI FORM
// ======================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  if(nama === "" || email === "" || pesan === ""){
    alert("Semua field harus diisi!");
  } else {
    alert("Pesan berhasil dikirim!");
    form.reset();
  }

});