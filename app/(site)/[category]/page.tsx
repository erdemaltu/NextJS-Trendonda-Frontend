import React from 'react'
import Link from "next/link";

const category = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;
  return (
    <>
      <div>
      <div className="bg-red-600">
      Category: {category}
      </div>
      <div className="flex gap-8">
      <Link href="/">Home</Link>
      <Link href="/category">Categoriler</Link>
      </div>
      </div>
    </>
  )
}

export default category