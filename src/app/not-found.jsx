import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Sorry, the page you are looing for does not exist</p>
        <Link href='/'>Back Home</Link>
    </div>
  )
}

export default notFound