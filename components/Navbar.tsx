import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 py-4">
          <h2 className="text-3xl font-bold leading-none text-black select-none transition-opacity duration-300 hover:opacity-80">
            <Link href="/">
              NotBlox<span className="text-2xl"> Baseplate</span>
            </Link>
          </h2>
        </div>
      </div>
    </section>
  )
}
