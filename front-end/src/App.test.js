import { render, screen } from '@testing-library/react'
// import App from '../src/views/App'
import NavBar from './views/navigationbar'
import LoginForm from './views/Login'
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react'

describe('Testing Front-end', () => {

  describe('Navigation Bar test', () => {
  var container
    beforeEach(() => {
      ({container} = render(<Router><NavBar /></Router>))
    })

    

    test('navbar exists', () => {     
      const linkElement = container.getElementsByClassName('navigation')
      expect(linkElement).toBeDefined()
     })
 
     test('elements in Navigation bar', () => {
       const button1 = screen.getByText('Add')
       const button2 = screen.getByText('MyCollection')
       const button3 = screen.getByText('Login')
 
       expect(button1).toBeInTheDocument()
       expect(button2).toBeInTheDocument()
       expect(button3).toBeInTheDocument()
     })

     



  })

  


}

)



