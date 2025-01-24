import React from 'react'
import { Metadata } from 'next'

export const metadata:Metadata={
  title:"About | Hakkımda ",
  description:"Efe Görkem Ümit hakkımda",
  robots:{
    index:false,
    follow:false,
  },
 
}

const category = () => {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    author: "erdemaltugalaca",
    isPublished: true,
    tags: ["gündem", "video", "yemek", "teknoloji"]
  }

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div>category</div>
    </>
  )
}

export default category