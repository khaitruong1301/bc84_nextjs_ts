//tsrafce
import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
        404 - Page Not Found
        <Link href='/'>Go to Home</Link>


    </div>
  )
}

export default NotFound