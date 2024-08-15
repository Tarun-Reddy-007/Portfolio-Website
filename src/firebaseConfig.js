import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDI7JVdBGbO7pRC1Wv2awwr_PglGe-NH1w",
  authDomain: "tarun-c-reddy.firebaseapp.com",
  databaseURL: "https://tarun-c-reddy-default-rtdb.firebaseio.com/",
  projectId: "tarun-c-reddy",
  storageBucket: "tarun-c-reddy.appspot.com",
  messagingSenderId: "671919651174",
  appId: "1:671919651174:web:0db3d753750479409af0a7",
  measurementId: "G-HXDNWK8YN5"
};

  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);
  
  export { database };

