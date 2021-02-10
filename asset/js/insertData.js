(function () {
    // all the code will be here  
    const request = indexedDB.open('SchoolDatabase', 1);

    request.onerror = (event) => {
        console.error(`Database error: ${event.target.errorCode}`);
    };
     
    // create the Contacts object store and indexes
    request.onupgradeneeded = (event) => {
        let db = event.target.result;

        // create the Contacts object store 
        // with auto-increment id
        let store = db.createObjectStore('Grades', {
            keyPath: "id",
        });


    };

    request.onsuccess = (event) => {
        // add implementation here
        const db = event.target.result;

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

        const txn = db.transaction('Grades', 'readwrite');
    
        // get the Contacts object store
        const store = txn.objectStore('Grades');
        //
        let query = store.put(grade);
    
        // handle success case
        query.onsuccess = function (event) {
            console.log(grade);
        };
    
        // handle the error case
        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }

    };

    function insertGrade(db, grade) {
        // create a new transaction
        const txn = db.transaction('Grades', 'readwrite');
    
        // get the Contacts object store
        const store = txn.objectStore('Grades');
        //
        let query = store.put(grade);
    
        // handle success case
        query.onsuccess = function (event) {
            console.log(grade);
        };
    
        // handle the error case
        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }

    
        // close the database once the 
        // transaction completes

    }

 })();