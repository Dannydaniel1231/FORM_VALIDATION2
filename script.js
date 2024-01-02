//  function validateForm(){
//     document.getElementById("error-message").innerHTML = "";

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
    let gender = document.getElementById("gender");
    let button = document.getElementById("button");
    let tbody = document.getElementById("tbody");
    console.log(tbody);

    // if (fname.trim() === "") {
    //    displayError("First Name is required!");
    //     return;
    // }

    // if(lname.trim() === ""){
    //     displayError("Last Name is required! ");
    //     return;
    // }

    // if(email.trim() === ""){
    //     displayError("Email is required! ");
    //     return;
    // }

    // if(isNaN(age)|| age < 0){
    //     displayError("Age must be a positive number");
    //     return;

    // }

    // //advanced using regex

    // let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if(!emailregex.test(email)){
    //      displayError("Invalid email format");
    //      return;
    // }

    //const formData = new FormData();
//    console.log("Form submitted successfully!");
  
//    formData.append(" First Name:", fname);
//    formData.append("Last Name:", lname);
//    formData.append("Email:", email);
//    formData.append("Age:", age);
//    formData.append("Gender:", gender);
//    formData.forEach((value,key)=>{
//     console.log(`${key} ${value}`)
//    })


button.addEventListener("click",e =>{
    e.preventDefault();

const data = {
  fname:fname.value,
  lname:lname.value,
  email:email.value,
  age:age.value,
  gender:gender.value,
};
let data2 = document.getElementById("data");
data2.innerHTML += `<div class="Results">
                    First Name: ${data.fname}<br>
                    Last Name: ${data.lname}<br>
                    Email: ${data.email}<br>
                    Age: ${data.age}<br>
                    Gender: ${data.gender}<br>
                    
                </div>`;
console.log(data);


  tbody.innerHTML += `
      <tr>
        <td>${data.fname}</td>
        <td>${data.lname}</td>
        <td>${data.email}</td>
        <td>${data.age}</td>
        <td>${data.gender}</td>
      </tr>
  
                `;
             

})
        



// function displayError(message) {
//   document.getElementById("error-message").innerHTML = message;
// }
//  }


