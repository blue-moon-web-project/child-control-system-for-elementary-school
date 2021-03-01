
       var logInBtn = document.getElementById("logInBtn");
        logInBtn.addEventListener("click", function (event) {

            event.preventDefault();

            var id = document.getElementById("studentId").value;

            var password = document.getElementById("studentPassword").value;

            db.collection('students').doc({ id: id }).get().then(student => {

                console.log(student)
                db.collection('teachers').doc({ id: id }).get().then(teacher => {
                    if (!student && !teacher) {
                        console.log(`The student with ${id} not found`);
                        var errorMessage = document.getElementById("errorMessage")
                        errorMessage.innerHTML = "Incorrect Id or Password"
                    }else {  
                        if(student){
                            if(student.id == id && student.password == password) {
                                console.log("from getstudent function " + student.firstName + " " + student.lastName + "log in successfully");
                                console.log(student)
        
                                window.open(`studentPage.html?id=${student.id}`, '_self');
        
                                // login page goes here
                            }
                        }
                        else if (teacher){
                            if(teacher.id == id && teacher.password == password) {
                                console.log("from getstudent function " + teacher.firstName + " " + teacher.lastName + "log in successfully");
                                console.log(teacher)
        
                                window.open(`teacherPage.html?id=${teacher.id}`, '_self');
                        }
                    }
                }
              });
            });
        });