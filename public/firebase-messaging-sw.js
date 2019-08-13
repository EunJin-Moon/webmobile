importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js")
var config = {
  apiKey: "AIzaSyC0po_hS-_IsiBOYPBkHbL1ux7c_sqexMc",
  authDomain: "webmobile02-b19c9.firebaseapp.com",
  databaseURL: "https://webmobile02-b19c9.firebaseio.com",
  storageBucket: "webmobile02-b19c9.appspot.com",
  messagingSenderId: "3779265069"
}
firebase.initializeApp(config)
const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function (payload) {
  const title = "Hello World"
  const options = {
    body: payload.data.status
  }
  return self.registration.showNotification(title, options)
})
