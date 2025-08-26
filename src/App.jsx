import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import { createBrowserRouter,createRoutesFromChildren,Route,RouterProvider,Navigate } from 'react-router-dom'
import Home from './components/home/Home'
import Error from './components/error/Error'

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout/>} errorElement ={<Error/>}>
              <Route index element = {<Home/>}/>
        </Route>
        ))

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
