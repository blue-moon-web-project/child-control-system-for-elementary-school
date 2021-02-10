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
        let store = db.createObjectStore('Students', {
            keyPath: "id",
            autoIncrement: true
        });

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
            // e.preventDefault()
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
            var grade = "5";
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

    
        // close the database once the 
        // transaction completes

    }

 })();












// (function ($) {
//     // USE STRICT
//     "use strict";

//     $(".form-radio .radio-item").click(function(){
//         //Spot switcher:
//         $(this).parent().find(".radio-item").removeClass("active");
//         $(this).addClass("active");
//     });
  
//     $('#course_type').parent().append('<ul class="list-item" id="newcourse_type" name="course_type"></ul>');
//     $('#course_type option').each(function(){
//         $('#newcourse_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
//     });
//     $('#course_type').remove();
//     $('#newcourse_type').attr('id', 'course_type');
//     $('#course_type li').first().addClass('init');
//     $("#course_type").on("click", ".init", function() {
//         $(this).closest("#course_type").children('li:not(.init)').toggle('slow');
//     });

//     $('#confirm_type').parent().append('<ul class="list-item" id="newconfirm_type" name="confirm_type"></ul>');
//     $('#confirm_type option').each(function(){
//         $('#newconfirm_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
//     });
//     $('#confirm_type').remove();
//     $('#newconfirm_type').attr('id', 'confirm_type');
//     $('#confirm_type li').first().addClass('init');
//     $("#confirm_type").on("click", ".init", function() {
//         $(this).closest("#confirm_type").children('li:not(.init)').toggle('slow');
//     });
    
//     $('#hour_appointment').parent().append('<ul class="list-item" id="newhour_appointment" name="hour_appointment"></ul>');
//     $('#hour_appointment option').each(function(){
//         $('#newhour_appointment').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
//     });
//     $('#hour_appointment').remove();
//     $('#newhour_appointment').attr('id', 'hour_appointment');
//     $('#hour_appointment li').first().addClass('init');
//     $("#hour_appointment").on("click", ".init", function() {
//         $(this).closest("#hour_appointment").children('li:not(.init)').toggle('slow');
//     });

//     var allOptions = $("#course_type").children('li:not(.init)');
//     $("#course_type").on("click", "li:not(.init)", function() {
//         allOptions.removeClass('selected');
//         $(this).addClass('selected');
//         $("#course_type").children('.init').html($(this).html());
//         allOptions.toggle('slow');
//     });

//     var FoodOptions = $("#confirm_type").children('li:not(.init)');
//     $("#confirm_type").on("click", "li:not(.init)", function() {
//         FoodOptions.removeClass('selected');
//         $(this).addClass('selected');
//         $("#confirm_type").children('.init').html($(this).html());
//         FoodOptions.toggle('slow');
//     });

//     var AppointmentOptions = $("#hour_appointment").children('li:not(.init)');
//     $("#hour_appointment").on("click", "li:not(.init)", function() {
//         AppointmentOptions.removeClass('selected');
//         $(this).addClass('selected');
//         $("#hour_appointment").children('.init').html($(this).html());
//         AppointmentOptions.toggle('slow');
//     });
// })(jQuery);