import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDpcHD1RUH6X5lDQP3iVKOPK9XXOhYMTsI',
  authDomain: 'partnerup-58fa2.firebaseapp.com',
  databaseURL: 'https://partnerup-58fa2.firebaseio.com',
  projectId: 'partnerup-58fa2',
  storageBucket: 'partnerup-58fa2.appspot.com',
  messagingSenderId: 'partnerup-58fa2',
  appId: '1:241127697829:web:d4ff812f667bf493244c4c',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
