// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: 'AIzaSyDk6eOHbV2Dw9mIExFihAnWs_DCbFssTiI',
	authDomain: 'heggen-planen.firebaseapp.com',
	projectId: 'heggen-planen',
	storageBucket: 'heggen-planen.appspot.com',
	messagingSenderId: '602810575370',
	appId: '1:602810575370:web:f35205de3c098226c80df3',
	measurementId: 'G-XRMJ8HCT17',
}

export const init = () => {
	// Initialize Firebase
	const app = initializeApp(firebaseConfig)
	const analytics = getAnalytics(app)
}
