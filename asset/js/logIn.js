
        var logInBtn = document.getElementById("logInBtn");
        logInBtn.addEventListener("click", function (event) {

            event.preventDefault();

            var id = document.getElementById("studentId").value;

            var password = document.getElementById("studentPassword").value;

            db.collection('students').doc({ id: id }).get().then(document => {
                console.log(document)
                if (!document) {
                    console.log(`The student with ${id} not found`);
                } else {
                    var student = document;

                    if(student.id == id && student.password == password) {
                        console.log("from getstudent function " + student.firstName + " " + student.lastName + "log in successfully");
                        console.log(student)

                        window.open(`studentPage.html?id=${student.id}`, '_self');

                        // login page goes here
                    }else{
                        console.log("incorrect password");
                    }
                }
              });
            });