const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
const id = urlParams.get('id');
console.log(id);

db.collection('teacher').doc({ id: id }).get().then(teacher => {
    console.log(teacher)

    var welcomeNameH4 = document.getElementById("welcomeNameH4");
    welcomeNameH4.innerHTML = "Wellcome "+ teacher.name;

    var idDisplay = document.getElementById("id");
    idDisplay.innerHTML = teacher.id

    var zone = document.getElementById("zone");
    zone.value = teacher.zone;

    var woreda = document.getElementById("woreda");
    woreda.value = teacher.woreda;

    var kebele = document.getElementById("kebele");
    kebele.value = teacher.kebele;
})

