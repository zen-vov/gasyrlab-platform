"use client"

import Link from "next/link"
import './styles/globals.css';

export default function NotFound() {
  return (
    <html>
      <body className="container">
        <div className="text-center">
          <h1 className="mt-10 font-semibold text-center">Page not found</h1>
          <Link href={'/'}>Home</Link>
        </div>
      </body>
    </html>
  )
}