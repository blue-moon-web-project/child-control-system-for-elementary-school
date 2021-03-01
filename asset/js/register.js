

const register = document.getElementById('submit_new_student');

register.addEventListener('click', function (e) {
    e.preventDefault()
    console.log("clicked")
    var id = "ha/" + Math.floor(1000 + Math.random() * 9000).toString() + "/21"; 
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
    var password = Math.floor(1000 + Math.random() * 9000).toString();
    console.log(firstName)


    var studentToRegister = {
        id: id,
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
        password: password
    }

    studentGrade = {
        studentId: id,
        studentGrade: grade,
        thisSemesterGrades: [{subject: "Maths", teacherId: "", value: "90"},
                             {subject: "English", teacherId: "", value: "90"},  
                             {subject: "Physics", teacherId: "", value: "78"},  
                             {subject: "Biology", teacherId: "", value: "99"},  
                             {subject: "Chemistry", teacherId: "", value: "89"},  
                             {subject: "Social study", teacherId: "", value: "97"},  
                             {subject: "Civics", teacherId: "", value: "93"},  
                             {subject: "French", teacherId: "", value: "100"},  
                             {subject: "Sport", teacherId: "", value: "100"},  
                            ],
        previousSemesterGrades: [
                                    {
                                        semester: "Acadamic year 2019 second semester",
                                        grades: [
                                            {subject: "Maths", teacherId: "", value: "90"},
                                            {subject: "English", teacherId: "", value: "90"},  
                                            {subject: "Physics", teacherId: "", value: "78"},  
                                            {subject: "Biology", teacherId: "", value: "99"},  
                                            {subject: "Chemistry", teacherId: "", value: "89"},  
                                            {subject: "Social study", teacherId: "", value: "97"},  
                                            {subject: "Civics", teacherId: "", value: "93"},  
                                            {subject: "French", teacherId: "", value: "100"},  
                                            {subject: "Sport", teacherId: "", value: "100"},  
                                        ]
                                    },
                                    {
                                        semester: "Acadamic year 2019 first semester",
                                        grades: [
                                            {subject: "Maths", teacherId: "", value: "90"},
                                            {subject: "English", teacherId: "", value: "90"},  
                                            {subject: "Physics", teacherId: "", value: "78"},  
                                            {subject: "Biology", teacherId: "", value: "99"},  
                                            {subject: "Chemistry", teacherId: "", value: "89"},  
                                            {subject: "Social study", teacherId: "", value: "97"},  
                                            {subject: "Civics", teacherId: "", value: "93"},  
                                            {subject: "French", teacherId: "", value: "100"},  
                                            {subject: "Sport", teacherId: "", value: "100"},  
                                        ]
                                    },



                                ]
    
    
    }

    db.collection('students').add(studentToRegister);
    db.collection('grades').add(studentGrade);

    var formReplacement = document.getElementById("formReplacement");
    formReplacement.innerHTML = `<div>
                                    <h3>you have registered successfully</h3>
                                    <p style="color:red;">your id is: <u>${id}</u><br>your password is: <u>${password}</u><p>
                                    
                                    <a href="logIn.html">Log In to Your account</a>
                                </div>`

    console.log(studentToRegister);

    // insert empty grades row on grades table withe the registered student id
});
