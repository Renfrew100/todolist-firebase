import app from 'firebase/app'
var firebaseConfig = { //change code to your own project 
    apiKey: "AIzaSyDpBQ7tq6JFdsk5RXyQKihpRg_8GGEURuE",
    authDomain: "reacttodolistapp-c2b62.firebaseapp.com",
    databaseURL: "https://reacttodolistapp-c2b62.firebaseio.com",
    projectId: "reacttodolistapp-c2b62",
    storageBucket: "reacttodolistapp-c2b62.appspot.com",
    messagingSenderId: "1000581257892",
    appId: "1:1000581257892:web:34d017117e4fec888be431",
    measurementId: "G-W2L076R1VM"
  };

class Firebase{

    constructor() {
        app.initializeApp(firebaseConfig)
    }
}
export default Firebase 