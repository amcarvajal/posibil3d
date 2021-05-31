import firebase from 'firebase'

 const firebaseConfig = {
     apiKey: "AIzaSyAK1j6zAxqeD3e8Y2UqFZwLL3Wmwu_mPdg",
     authDomain: "bobe-7d6c3.firebaseapp.com",
     projectId: "bobe-7d6c3",
     storageBucket: "bobe-7d6c3.appspot.com",
     messagingSenderId: "208887899667",
     appId: "1:208887899667:web:9218bae8b079472a2881e6",
     measurementId: "G-Z0JJ2XSCT5"
   };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
   }

   const mapUserFromFirebaseAuthToUser = (user) => {
    //    console.log(user)
    const {additionalUserInfo, displayName, photoURL, email} = user
    // const {} = additionalUserInfo.profile
    // const {} = additionalUserInfo.profile
    return {
        avatar: photoURL,
        name: displayName,
        email
    }

   }
   export const onAuthStateChanged = (onChange) => {
       return firebase.auth().onAuthStateChanged(user =>{
           console.log
           const normalizedUser = mapUserFromFirebaseAuthToUser(user)
           onChange(normalizedUser)
       }
        )
   }

  export const loginWithGmail = () => {
      const googleProvider = new firebase.auth.GoogleAuthProvider()
      return firebase
      .auth().signInWithPopup
      (googleProvider)
    //   .then(mapUserFromFirebaseAuthToUser)
        }
      
