const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
const id = urlParams.get('id');
console.log(id);

db.collection('teachers').doc({ id: id }).get().then(teacher => {
    console.log(teacher)

    var welcomeNameH4 = document.getElementById("welcomeNameH4");
    welcomeNameH4.innerHTML = "Wellcome "+ teacher.name;

    var idDisplay = document.getElementById("id");
    idDisplay.innerHTML = teacher.id

    var name = document.getElementById("firstName");
    name.value = teacher.name;


    var zone = document.getElementById("zone");
    zone.value = teacher.zone;

    var woreda = document.getElementById("woreda");
    woreda.value = teacher.woreda;

    var kebele = document.getElementById("kebele");
    kebele.value = teacher.kebele;

    var gradeAndSubject = document.getElementById("gradeAndSubject");
    gradeAndSubject.innerHTML = `Grade ${teacher.grade} ${teacher.subject}`

    db.collection('grades').get().then(grades => {
        console.log(grades)
        var myStudents = [];

        grades.forEach(grade => {
            if (grade.studentGrade == teacher.grade) {
                myStudents.push(grade)
            }
            grade.studentId = "ha/4386/21"
            db.collection('grades').add(grade);

        });
        console.log(myStudents)
        var gradesDisplayerDiv = document.getElementById("gradesDisplayerDiv");
        var gradesDisplayerString = `<li class="list-group-item d-flex justify-content-between align-items-center active">
        Student Id
        <span class="">Grade</span>
      </li>`
        myStudents.forEach(displayStudent => {
            // display the students here
            gradesDisplayerString += `<li id="" class="list-group-item d-flex justify-content-between align-items-center grade">
            ${displayStudent.studentId}
            <input type="text" value="${displayStudent.thisSemesterGrades[1].value}">
          </li>`
        });

        gradesDisplayerDiv.innerHTML = gradesDisplayerString
        var saveChanges = document.getElementById("saveChanges");

        saveChanges.addEventListener("click", function (e) {
            
        })

      })
})

