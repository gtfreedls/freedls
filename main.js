// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBJkUCsmeL3gHb37b3I9Ag5v1DhRC9Bx-0",
    authDomain: "gtcf-adfd2.firebaseapp.com",
    databaseURL: "https://gtcf-adfd2.firebaseio.com",
    projectId: "gtcf-adfd2",
    storageBucket: "gtcf-adfd2.appspot.com",
    messagingSenderId: "793631937190",
    appId: "1:793631937190:web:6d3c750adc563563405a67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var database = firebase.database();
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');


  // Save message
  saveMessage(name, company, email);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Name: name,
    Password:company,
    Email:email,
  });
}
