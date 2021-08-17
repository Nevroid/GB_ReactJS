import { render } from '@testing-library/react'
import Home from "../Home"

describe('Homepage render test', () => {
  it('should match "Home" component snapshot', () => {
    const component = render(<Home />)
    expect(component).toMatchSnapshot()
  })
})