
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
const id = urlParams.get('id');
console.log(id);





db.collection('students').doc({ id: id }).get().then(student => {
    console.log(student)
    var welcomeNameH4 = document.getElementById("welcomeNameH4");
    welcomeNameH4.innerHTML = "Wellcome "+student.firstName + " " + student.lastName

    var idDisplay = document.getElementById("id");
    idDisplay.innerHTML = student.id

    var firstName = document.getElementById("firstName");
    firstName.value = student.firstName;

    var lastName = document.getElementById("lastName");
    lastName.value = student.lastName;

    var dateOfBirth = document.getElementById("dateOfBirth");
    dateOfBirth.value = student.dateOfBirth;

    var zone = document.getElementById("zone");
    zone.value = student.zone;

    var woreda = document.getElementById("woreda");
    woreda.value = student.woreda;

    var kebele = document.getElementById("kebele");
    kebele.value = student.kebele;

    var poBox = document.getElementById("poBox");
    poBox.value = student.poBox;

    var studentSaveChanges = document.getElementById("studentSaveChanges")
    studentSaveChanges.addEventListener("click", function (e) {
    });

    db.collection('grades').doc({ studentId: student.id }).get().then(grades => {
      console.log(grades)
      var thisSemesterGrades = grades.thisSemesterGrades;
      console.log(thisSemesterGrades)

      var maths = document.getElementById("maths")
      maths.innerHTML = thisSemesterGrades[0].value

      var english = document.getElementById("english")
      english.innerHTML = thisSemesterGrades[1].value

      var physics = document.getElementById("physics")
      physics.innerHTML = thisSemesterGrades[2].value

      var biology = document.getElementById("biology")
      biology.innerHTML = thisSemesterGrades[3].value

      var chemistry = document.getElementById("chemistry")
      chemistry.innerHTML = thisSemesterGrades[4].value

      var civics = document.getElementById("civics")
      civics.innerHTML = thisSemesterGrades[6].value

      var french = document.getElementById("french")
      french.innerHTML = thisSemesterGrades[7].value

      var sport = document.getElementById("sport")
      sport.innerHTML = thisSemesterGrades[8].value

    
      var previousSemesterGrades = grades.previousSemesterGrades
      
      var previousGradesDispalayer = document.getElementById("previousGradesDispalayer")
      var previousGradesString = `<h3 class="display-4 text-center m-5">previous semester Grades`
      previousSemesterGrades.forEach(semesterGrade => {
        console.log(semesterGrade);
        previousGradesString += `<h3 class="text-center m-5">${semesterGrade.semester}</h3> <center><ul class="list-group" style="max-width:800px;">
        <li class="list-group-item d-flex justify-content-between align-items-center active">
          Subject
          <span class="">Grade</span>
        </li>
        <li id="" class="list-group-item d-flex justify-content-between align-items-center">
          Maths
          <span class="" id="maths">${thisSemesterGrades[0].value}</span>
        </li>
        <li id="" class="list-group-item d-flex justify-content-between align-items-center">
          English
          <span class="" id="english">${thisSemesterGrades[1].value}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Biology
          <span class="" id="biology">${thisSemesterGrades[2].value}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Physics
          <span class="" id="physics">${thisSemesterGrades[3].value}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Chemistry
          <span class="" id="chemistry">${thisSemesterGrades[4].value}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Civics
          <span class="" id="civics">${thisSemesterGrades[6].value}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          French
          <span class="" id="french">${thisSemesterGrades[7].value}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Sport
          <span class="" id="sport">${thisSemesterGrades[8].value}</span>
        </li>
    </ul><center>`
      });
      previousGradesDispalayer.innerHTML = previousGradesString;
    })

   

  })


// (function () {
//     // all the code will be here  
//     const request = indexedDB.open('SchoolDatabase', 1);

//     request.onerror = (event) => {
//         console.error(`Database error: ${event.target.errorCode}`);
//     };
    
//     // create the Contacts object store and indexes
//     request.onupgradeneeded = (event) => {
//         let db = event.target.result;

//     };

//     request.onsuccess = (event) => {

//         var grade = {
//             id: 49, 
//             grades: [
        //         {teacherId: "5", subject: "English", grade: "A"},
        //         {teacherId: "6", subject: "Amharic", grade: "A"},
        //         {teacherId: "7", subject: "Biology", grade: "A"},
        //         {teacherId: "8", subject: "Physics", grade: "A"},
        //         {teacherId: "9", subject: "Chemistry", grade: "A"},
        //         {teacherId: "10", subject: "Mathematics", grade: "A"},
        //         {teacherId: "11", subject: "It", grade: "A"},
        //         {teacherId: "12", subject: "Geography", grade: "A"},
        //         {teacherId: "13", subject: "History", grade: "A"}
        //     ]
        // }

        // // add implementation here
        // const db = event.target.result;

        //     const txn = db.transaction('Students', 'readonly');
        //     const store = txn.objectStore('Students');
        //     let query = store.get(id);
    
        //     query.onsuccess = (event) => {
                
        //         if (!event.target.result) {
        //             console.log(`The student with ${id} not found`);
        //         } else {
                    // var student = event.target.result;
                    // console.log(student.firstName + ' ' + student.lastName+"from the student page");
                    
            // };
        
//             query.onerror = (event) => {
//                 console.log(event.target.errorCode);
//             }
//     };
//  })();
