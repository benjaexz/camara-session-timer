import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDZv4YQmmXiSx9YlnecvO_yzu6XGOHuDwE',
  authDomain: 'camara-session-timer.firebaseapp.com',
  projectId: 'camara-session-timer',
  storageBucket: 'camara-session-timer.firebasestorage.app',
  messagingSenderId: '651914134981',
  appId: '1:651914134981:web:36d80ba7b959b05bee37ac',
  databaseURL: 'https://camara-session-timer-default-rtdb.firebaseio.com/',
}

const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)