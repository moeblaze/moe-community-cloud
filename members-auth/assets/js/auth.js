
// Firebase Config Placeholder
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("auth-container").style.display = "none";
      document.getElementById("content").style.display = "block";
    })
    .catch(error => alert(error.message));
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Account created. You may now login.");
    })
    .catch(error => alert(error.message));
}

function logout() {
  auth.signOut().then(() => {
    document.getElementById("auth-container").style.display = "block";
    document.getElementById("content").style.display = "none";
  });
}
