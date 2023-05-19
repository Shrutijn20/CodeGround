import {AppBar,Toolbar,styled} from '@mui/material';
import logo from '../images/logo.png'
import React from 'react'

const Container = styled(AppBar)`
        background: #F7F0E9;
        height:10vh;       
`

const Header=() =>{
  return (
  <Container position='static'>
    <Toolbar>
        <img src={logo} alt="logo" style={{marginLeft:35, marginTop:5 ,alignSelf:'center'}} />
    </Toolbar>
  </Container>
  )
}

export default Header
