
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
console.log(id);

(function () {
    // all the code will be here  
    const request = indexedDB.open('SchoolDatabase', 1);

    request.onerror = (event) => {
        console.error(`Database error: ${event.target.errorCode}`);
    };
    
    // create the Contacts object store and indexes
    request.onupgradeneeded = (event) => {
        let db = event.target.result;

    };

    request.onsuccess = (event) => {

        var grade = {
            id: 49, 
            grades: [
                {teacherId: "5", subject: "English", grade: "A"},
                {teacherId: "6", subject: "Amharic", grade: "A"},
                {teacherId: "7", subject: "Biology", grade: "A"},
                {teacherId: "8", subject: "Physics", grade: "A"},
                {teacherId: "9", subject: "Chemistry", grade: "A"},
                {teacherId: "10", subject: "Mathematics", grade: "A"},
                {teacherId: "11", subject: "It", grade: "A"},
                {teacherId: "12", subject: "Geography", grade: "A"},
                {teacherId: "13", subject: "History", grade: "A"}
            ]
        }

        // add implementation here
        const db = event.target.result;

            const txn = db.transaction('Students', 'readonly');
            const store = txn.objectStore('Students');
            let query = store.get(id);
    
            query.onsuccess = (event) => {
                
                if (!event.target.result) {
                    console.log(`The student with ${id} not found`);
                } else {
                    var student = event.target.result;
                    console.log(student.firstName + ' ' + student.lastName+"from the student page");
                    // displaying the student result goes here
                    var welcomeNameH4 = document.getElementById("welcomeNameH4");
                    welcomeNameH4.innerHTML = "Wellcome "+student.firstName + " " + student.lastName

                    var id = document.getElementById("id");
                    id.innerHTML = student.id

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
                }
            };
        
            query.onerror = (event) => {
                console.log(event.target.errorCode);
            }
    };
 })();
