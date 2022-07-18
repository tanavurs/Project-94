user_name = localStorage.getItem("user_name");
document.getElementById("welcoming_user").innerHTML = "Welcome, " + user_name + "!";

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDggC2NBJ7ZgfCOKQLat2Y7E3mCm1NgBsE",
    authDomain: "lets-chat-4810c.firebaseapp.com",
    databaseURL: "https://lets-chat-4810c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-4810c",
    storageBucket: "lets-chat-4810c.appspot.com",
    messagingSenderId: "636908882220",
    appId: "1:636908882220:web:84a9c878ed1f5f9854c489"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" +  Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

 function addRoom()
 {
       room_name= document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name);
       document.getElementById("room_name").innerHTML= "";
   }

   function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location = "lets_chat_messagepage.html";
     }