'use client'

import React from 'react'

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-8">{error?.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={() => reset()}
        className="text-blue-500 underline"
        type="button"
      >
        Try again
      </button>
    </div>
  )
}
