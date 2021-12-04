
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBIugSzkJvPVW9kXs7pB-UAc5kttXDlY9k",
      authDomain: "kwitter-910d0.firebaseapp.com",
      databaseURL: "https://kwitter-910d0-default-rtdb.firebaseio.com",
      projectId: "kwitter-910d0",
      storageBucket: "kwitter-910d0.appspot.com",
      messagingSenderId: "889361395793",
      appId: "1:889361395793:web:0ea5d880440fe177688870"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
function addUser(){
      userName = document.getElementById("enter_room").value;
      firebase.database().ref("/").child(userName).update({
            purpose : "Add user name"});
        }
      //End code
      });});}
getData();
