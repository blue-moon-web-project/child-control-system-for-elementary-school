
// (function () {
//     // all the code will be here  
//     const request = indexedDB.open('SchoolDatabase', 1);

//     request.onerror = (event) => {
//         console.error(`Database error: ${event.target.errorCode}`);
//     };
//     // create the Contacts object store and indexes
//     request.onupgradeneeded = (event) => {
//         let db = event.target.result;

//         // create the Contacts object store 
//         // with auto-increment id
//         let store = db.createObjectStore('Grades', { keyPath: "id" });


//     };

//     request.onsuccess = (event) => {
//         const db = event.target.result;

//         var grade = {
//                         id: 49, 
//                         grades: [
//                             {teacherId: "5", subject: "English", grade: "A"},
//                             {teacherId: "6", subject: "Amharic", grade: "A"},
//                             {teacherId: "7", subject: "Biology", grade: "A"},
//                             {teacherId: "8", subject: "Physics", grade: "A"},
//                             {teacherId: "9", subject: "Chemistry", grade: "A"},
//                             {teacherId: "10", subject: "Mathematics", grade: "A"},
//                             {teacherId: "11", subject: "It", grade: "A"},
//                             {teacherId: "12", subject: "Geography", grade: "A"},
//                             {teacherId: "13", subject: "History", grade: "A"}
//                         ]
//                     }

//         // add implementation here
//         const txn = db.transaction('Grades', 'readwrite');
    
//         // get the Contacts object store
//         const store = txn.objectStore('Grades');
//         //
//         let query = store.put(grade);
    
//         // handle success case
//         query.onsuccess = function (event) {
//             console.log(event);
//         };
    
//         // handle the error case
//         query.onerror = function (event) {
//             console.log(event.target.errorCode);
//         }
        
//         txn.oncomplete = function () {
//             db.close();
//         };
//         // close the database once the 
//         // transaction completes
//     }

//     function insertStudent(db, student) {
//         // create a new transaction
//         const txn = db.transaction('Students', 'readwrite');
    
//         // get the Contacts object store
//         const store = txn.objectStore('Students');
//         //
//         let query = store.put(student);
    
//         // handle success case
//         query.onsuccess = function (event) {
//             console.log(event);
//         };
    
//         // handle the error case
//         query.onerror = function (event) {
//             console.log(event.target.errorCode);
//         }
    
//         // close the database once the 
//         // transaction completes
//     }

//  })();

(function () {
    // all the code will be here  
    const request = indexedDB.open('SchoolDatabase', 2);

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

        

        var logInBtn = document.getElementById("logInBtn");
        logInBtn.addEventListener("click", function (event) {

            event.preventDefault();

            var id = document.getElementById("studentId").value;
            id = parseInt(id);

            var password = document.getElementById("studentPassword").value;

            const txn = db.transaction('Students', 'readonly');
            const store = txn.objectStore('Students');
            let query = store.get(id);
    
            query.onsuccess = (event) => {
                console.log(id);
                console.log(password);
                console.log(event.target.result.id);
                console.log(event.target.result.password);
                
                if (!event.target.result) {
                    console.log(`The student with ${id} not found`);
                } else {
                    var student = event.target.result;

                    if(student.id == id && student.password == password) {
                        console.log("from getstudent function " + student.firstName + " " + student.lastName + "log in successfully");
                        console.log(student)

                        window.open(`studentPage.html?id=${student.id}`, '_self');

                        // login page goes here
                    }else{
                        console.log("incorrect password");
                    }
                }
            };
        
            query.onerror = (event) => {
                console.log(event.target.errorCode);
            }

        });

    };
 })();
