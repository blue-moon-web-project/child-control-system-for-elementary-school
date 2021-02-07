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
        // add implementation here
        const db = event.target.result;
        var id = 1;

        const txn = db.transaction('Students', 'readonly');
        const store = txn.objectStore('Students');
    
        let query = store.get(id);
    
        query.onsuccess = (event) => {
            if (!event.target.result) {
                console.log(`The contact with ${id} not found`);
            } else {
                var student = event.target.result;
                console.log("from getstudent function " + student.firstName + " " + student.lastName);
            }
        };
    
        query.onerror = (event) => {
            console.log(event.target.errorCode);
        }
    };

    // function getStudentById(db, id) {
    //     const txn = db.transaction('Students', 'readonly');
    //     const store = txn.objectStore('Students');
    
    //     let query = store.get(id);
    
    //     query.onsuccess = (event) => {
    //         if (!event.target.result) {
    //             console.log(`The contact with ${id} not found`);
    //         } else {
    //             var student = event.target.result;
    //             console.log("from getstudent function " + student.firstName);
    //             return student;
    //         }
    //     };
    
    //     query.onerror = (event) => {
    //         console.log(event.target.errorCode);
    //     }
    // };

 })();