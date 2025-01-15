import React from 'react'

const content = async ({ params }: { params: { content: string } }) => {
    const { content } = await params;
  return (
    <div>content : {params.content}</div>
  )
}

export default content