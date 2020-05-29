import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCy2MDyOnH6kqkp4OyUxlajKK_6xHfTeK0",
  authDomain: "tic-tac-toe-dca51.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-dca51.firebaseio.com",
  projectId: "tic-tac-toe-dca51",
  storageBucket: "tic-tac-toe-dca51.appspot.com",
  messagingSenderId: "219434023245",
  appId: "1:219434023245:web:dd2b4d8108320a39305f04"
};

firebase.initializeApp(firebaseConfig);

export default firebase