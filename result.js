// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCtAac9P0ysFNz2tA0HQeUEp1ANs8eS_4Q",
    authDomain: "ipl-1b522.firebaseapp.com",
    projectId: "ipl-1b522",
    storageBucket: "ipl-1b522.appspot.com",
    messagingSenderId: "637595828360",
    appId: "1:637595828360:web:ddd4acf384f6f06246df3d",
    measurementId: "G-0ZSRPZ24W5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function readResults(){
    year=document.getElementById("year").value;
    fetch(year);
}
function fetch(year){
    var results=firebase.database().ref(year);
    results.on('value', (data) => {
        finalrannks=data.val();
        document.getElementById("r1").innerHTML="<br > 1. "+finalrannks[1];
        document.getElementById("r2").innerHTML="<br > 2. "+finalrannks[2];
        document.getElementById("r3").innerHTML="<br > 3. "+finalrannks[3];
        document.getElementById("r4").innerHTML="<br > 4. "+finalrannks[4];
        document.getElementById("r5").innerHTML="<br > 5. "+finalrannks[5];
        document.getElementById("r6").innerHTML="<br > 6. "+finalrannks[6];
        document.getElementById("r7").innerHTML="<br > 7. "+finalrannks[7];
        document.getElementById("r8").innerHTML="<br > 8. "+finalrannks[8];
        document.getElementById("r9").innerHTML="<br > 9. "+finalrannks[9];
        document.getElementById("r10").innerHTML="<br > 10. "+finalrannks[10];
    })
}



document.getElementById('sub').addEventListener('click',readResults);

