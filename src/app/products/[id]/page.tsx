import React from 'react'

const Products = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>Product ID: {id}</div>
  )
}

export default Products
