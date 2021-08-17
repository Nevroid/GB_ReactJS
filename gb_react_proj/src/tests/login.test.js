import { render, screen } from '@testing-library/react'
import Login from "../Login"

describe('E-mail form test', () => {
  it('The email-field value should be an empty string on startup', () => {
    render(<Login />)
    const emailValue = screen.getByPlaceholderText('E-Mail').value
    expect(emailValue).toEqual('')
  })
})