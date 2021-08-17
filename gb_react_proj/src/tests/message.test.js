import { render, screen } from '@testing-library/react'
import Message from '../Message'

describe('Message text test', () => {
  it('Should render message that contain text from props', () => {
    const component = render(<Message messageText='Hello' />)
    const expected = screen.getByText('Hello')
    expect(expected).toBeInTheDocument()
  })
})

describe('Message styles test', () => {
  it('Component root div should have proper class', () => {
    const component = render(<Message messageText='Hello' />)
    const rootDiv = screen.getByText('Hello').parentElement
    expect(rootDiv).toHaveClass('message')
  })
})