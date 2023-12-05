import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Layout = () => {
  return (
    <>
        <NavBar></NavBar>
        <Box padding={5}>
            <Outlet></Outlet>
        </Box>
    </>
  )
}

export default Layout