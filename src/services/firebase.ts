import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAPJ5faexS3EHAauj76ozYpuKRQEfxnG7A',
    authDomain: 'managment-ui-kit.firebaseapp.com',
    projectId: 'managment-ui-kit',
    storageBucket: 'managment-ui-kit.appspot.com',
    messagingSenderId: '374889405472',
    appId: '1:374889405472:web:a3a42c5ee04b43d047f045',
    measurementId: 'G-4WDHR87S74',
}
firebase.initializeApp(firebaseConfig)

export { firebase }
