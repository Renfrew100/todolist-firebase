import app from 'firebase/app';
import  'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_MESSAGE,
    appId: process.env.REACT_APP_APPID,
};

class Firebase {

    construtor(){
        app.initializeApp(firebaseConfig);
        this.app = app.auth();
    }   
}

export default Firebase;
