import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Corrected import
// Assuming the file name is firebaseConfig.js
//import { auth } from "../utils/firebase/firebaseConfig"; // Corrected import

// Now you can use the auth object here

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    const authInstance = getAuth(); // Get the Firebase Auth instance
    onAuthStateChanged(authInstance, (user) => {
      // Use the correct instance
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // ... //since it returns action.payload in userSlice
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        //since it returns null in userSlice
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
