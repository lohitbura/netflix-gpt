import React from 'react'
import { appRouter } from '../utils/router'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
