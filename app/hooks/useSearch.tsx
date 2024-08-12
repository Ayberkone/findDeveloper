import { useState } from 'react'

// Define a custom hook for managing search functionality
export const useSearch = () => {
  const [query, setQuery] = useState('')

  // Function to handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  // Function to handle the search action
  const performSearch = () => {
    // For now, just log the search query to the console
    console.log('Searching for:', query)
    // - API call
    // - Filter the list
    // - Navigate to a search results page
  }

  return {
    query,
    handleInputChange,
    performSearch
  }
}
