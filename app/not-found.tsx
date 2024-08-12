import React from 'react'
import Link from 'next/link'

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-8">
      Oops! The page you are looking for does not exist.
    </p>
    <Link href="/">
      <span className="text-blue-500 underline">Go back to the homepage</span>
    </Link>
  </div>
)

export default NotFound
