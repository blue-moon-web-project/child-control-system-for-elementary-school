(function () {
    // all the code will be here  
    const request = indexedDB.open('SchoolDatabase', 2);

    request.onerror = (event) => {
        console.error(`Database error: ${event.target.errorCode}`);
    };
     
    // create the Contacts object store and indexes
    request.onupgradeneeded = (event) => {
        let db = event.target.result;

        // create the Contacts object store 
        // with auto-increment id
        // let store = db.createObjectStore('Students', {
        //     keyPath: "id",
        //     autoIncrement: true
        // });

        let gradeStore = db.createObjectStore('Grades', {
            keyPath: "id",
        });

    };

    request.onsuccess = (event) => {
        // add implementation here
        const db = event.target.result;

        const register = document.getElementById('submit_new_student');
        
        // new student Registrations
        // getting students data from register.html and storing it into the db

        

        // var firstName = "Biruk";
        // var lastName = "Kassaw";
        // var dateOfBirth = new Date();
        // var zone = "akaki kality ";
        // var woreda = "woreda 6";
        // var kebele = "7";
        // var houseNo = "653";
        // var poBox = "678";
        // var town = "Addis Ababa";
        // var nationality = "Ethiopia";
        // var parentEmail = "birukKassaw@gmail.com";
        // var parentPhoneNo = "0930995547";
        // var grade = "5";
        // var section = "1";
        // var password = "4523"



        console.log(register)
        register.addEventListener('click', function (e) {
            e.preventDefault()
            console.log("clicked")
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var dateOfBirth = document.getElementById("dateOfBirth").value;
            var zone = document.getElementById("zone").value;
            var woreda = document.getElementById("woreda").value;
            var kebele = document.getElementById("kebele").value;
            var houseNo = document.getElementById("houseNo").value;
            var poBox = document.getElementById("poBox").value;
            var town = document.getElementById("town").value;
            var nationality = document.getElementById("nationality").value;
            var parentEmail = document.getElementById("parentEmail").value;
            var parentPhoneNo = document.getElementById("parentPhoneNo").value;
            var grade = document.getElementById("grade").value;
            var section = "1";
            var password = Math.floor(1000 + Math.random() * 9000).toString();
            console.log(firstName)


            // inserting id and empity grades to grades table



            insertStudent(db, {
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                zone: zone,
                woreda: woreda,
                kebele: kebele,
                houseNo: houseNo,
                poBox: poBox,
                town: town,
                nationality: nationality,
                parentEmail: parentEmail,
                parentPhoneNo: parentPhoneNo,
                grade: grade,
                section: section,
                password: password
            });

            // window.location.open("index.html");


        });

        // creating grades table
            // creating grades table
            // creating grades table
            var grade = {
                id: id, 
                grade: 8,
                grades: [
                    // {teacherId: "1", subject: "English", grade: "90"},
                    // {teacherId: "2", subject: "Amharic", grade: "92"},
                    // {teacherId: "3", subject: "Biology", grade: "98"},
                    // {teacherId: "4", subject: "Physics", grade: "89"},
                    // {teacherId: "5", subject: "Chemistry", grade: "98"},
                    // {teacherId: "6", subject: "Mathematics", grade: "90"},
                    // {teacherId: "7", subject: "It", grade: "100"},
                    // {teacherId: "8", subject: "Geography", grade: "80"},
                    // {teacherId: "9", subject: "History", grade: "99"}
                ]
            }
    
            insertGrade(db, grade);
    
            // creating grades table
            // creating grades table
            // creating grades table

    };

    function insertStudent(db, student) {
        // create a new transaction
        const txn = db.transaction('Students', 'readwrite');
    
        // get the Contacts object store
        const store = txn.objectStore('Students');
        //
        let query = store.put(student);
    
        // handle success case
        query.onsuccess = function (event) {
            console.log(student);
        };
    
        // handle the error case
        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }

    
        // close the database once the 
        // transaction completes

    }


    function insertGrade(db, grade) {
        console.log("insert grade function gebtual")
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

    

    }

 })();

//  end of plage

