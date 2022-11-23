import { render, screen, fireEvent } from '@testing-library/react'
// import App from '../src/views/App'
import NavBar from './views/navigationbar'
import LoginForm from './views/Login'
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react'
import { login } from './services/login';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

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
 
     test('elements in Navigation bar', async () => {
       const button1 = screen.getByText('Add')
       const button2 = screen.getByText('MyCollection')
       const button3 = screen.getByText('Login')
 
       expect(button1).toBeInTheDocument()
       expect(button2).toBeInTheDocument()
       expect(button3).toBeInTheDocument()

       const user = userEvent.setup()

       await user.click(button3)
       screen.debug()



     })

    
  })

  describe('<LoginForm />', () => {
    var mockCallback

    beforeEach(() => {
       mockCallback = jest.fn()
      render(<Router><LoginForm userUpdate={mockCallback}/></Router>) 
    })
    screen.debug()

    test('navbar exists', () => {     
      screen.debug()
      expect(screen.getByText(/Add/i)).toBeDefined()
     })

     test('Login Form exist', () => {
      const form = screen.getByRole('button')

      const formUsername = screen.getByPlaceholderText('username')
      const formpassword = screen.getByPlaceholderText('password')
      const formSubmit = screen.getByRole('button')


      expect(formUsername).toBeDefined()
      expect(formpassword).toBeDefined()
      expect(formSubmit).toHaveTextContent('login')

      fireEvent.change(formUsername, { target: { value: 'dropi' } })
      expect(screen.getByPlaceholderText('username').value).toHaveLength(5)
      fireEvent.change(formpassword,{ target: { value: 'dropidropi' } })
      expect(screen.getByPlaceholderText('password').value).toHaveLength(10)
      userEvent.click(formSubmit)

      expect(mockCallback).not.toBeCalled()
     })
  })
})



