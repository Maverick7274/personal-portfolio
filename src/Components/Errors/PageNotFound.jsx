import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
        <main class="h-screen w-full flex flex-col justify-center items-center">
            <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div class="bg-primary text-[#000] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button class="mt-5">
            <a class="btn btn-primary">
                <Link to="/">Go Home</Link>
            </a>
            </button>
        </main>
    </div>
  )
}

export default PageNotFound