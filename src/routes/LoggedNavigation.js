import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoggedLayout } from "../layouts"
import { Auth, Home } from "../pages"

export function LoggedNavigation() {
  return (
    <BrowserRouter>
      <LoggedLayout>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/:id' element={<Home />} />
        </Routes>
      </LoggedLayout>

    </BrowserRouter>
  )
}
