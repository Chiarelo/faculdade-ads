async function api() {
  const email = window.document.getElementById("email").value;
  const inputName = window.document.getElementById("name").value
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((users) => {
       let userData = users.find((user) => user.email === email || user.name === inputName);
       if (userData) {
         const { name, phone, address, company, id, username, website, email } = userData;
         const { geo, city, zipcode, street, suite } = address;
         const { lat, lng } = geo;
         const { name: nameCompany, catchPhrase, bs } =  company;

        document.getElementById("email").value = email
        document.getElementById("name").value = name
        document.getElementById("username").value = username
        document.getElementById("phone").value = phone
        document.getElementById("address").value = `${street}, ${suite}`
        document.getElementById("city").value = city
        document.getElementById("zipcode").value = zipcode
        document.getElementById("website").value = website
        document.getElementById("companyName").value = nameCompany
        document.getElementById("catchPhrase").value = catchPhrase
        document.getElementById("bs").value = bs
 
         
       } else {
         alert("Email not found.");
       }
     });
 }

// Clear all input fields
function clearFields(){
  // Get all input fields of types text, email, tel, and url
  var inputF = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="url"]');
   
  // Iterate over each input field and clear its value
  inputF.forEach(function(input) {
     input.value = "";
  });
 }