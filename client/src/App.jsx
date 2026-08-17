import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../utils/firebase'

const App = () => {

  const googleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvider)
    console.log(data)
  }

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <button
        onClick={googleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Continue with Google
      </button>
    </div>
  )
}

export default App