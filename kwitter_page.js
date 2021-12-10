var firebaseConfig = {
    apiKey: "AIzaSyBIugSzkJvPVW9kXs7pB-UAc5kttXDlY9k",
    authDomain: "kwitter-910d0.firebaseapp.com",
    databaseURL: "https://kwitter-910d0-default-rtdb.firebaseio.com",
    projectId: "kwitter-910d0",
    storageBucket: "kwitter-910d0.appspot.com",
    messagingSenderId: "889361395793",
    appId: "1:889361395793:web:0ea5d880440fe177688870"
  };
  

  firebase.initializeApp(firebaseConfig);
  user_name =localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
