import firebase from 'firebase'; 

 var config = {
  apiKey: "AIzaSyCiiwWWLlNl3qeF41VJIOz6NElrFkdGgNE",
  authDomain: "project-five-bfa86.firebaseapp.com",
  databaseURL: "https://project-five-bfa86.firebaseio.com",
  projectId: "project-five-bfa86",
  storageBucket: "project-five-bfa86.appspot.com",
  messagingSenderId: "244464276638"
};
firebase.initializeApp(config);

export default firebase;